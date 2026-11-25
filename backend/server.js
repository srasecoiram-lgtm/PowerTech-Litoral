import { Buffer } from 'node:buffer';
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import process from 'node:process';
import express from 'express';

const {
  INSTAGRAM_ACCESS_TOKEN,
  INSTAGRAM_FEED_KEY,
  META_WEBHOOK_VERIFY_TOKEN,
  META_APP_SECRET,
  PORT = '3001',
  HOST = '127.0.0.1',
} = process.env;

const app = express();
app.disable('x-powered-by');
app.set('query parser', 'simple');
app.use((_req, res, next) => {
  res.set({
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
  });
  next();
});

function matchesSecret(provided, secret) {
  if (typeof provided !== 'string' || provided.length > 1024 || !secret) return false;
  const hash = (value) => createHash('sha256').update(value).digest();
  return timingSafeEqual(hash(provided), hash(secret));
}

let cache;
let feedRequest;
async function fetchFeed() {
  const url = new URL('https://graph.instagram.com/me/media');
  url.searchParams.set('fields', 'id,caption,media_url,timestamp,media_type,permalink');
  url.searchParams.set('limit', '12');
  const response = await fetch(url, {
    headers: { Authorization: 'Bearer ' + INSTAGRAM_ACCESS_TOKEN },
    signal: AbortSignal.timeout(5000),
    redirect: 'error',
  });
  if (!response.ok) throw new Error('Instagram indisponível');
  const { data } = await response.json();
  if (!Array.isArray(data)) throw new Error('Resposta inesperada do Instagram');
  cache = { data, expires: Date.now() + 60_000 };
  return data;
}

app.get('/instagram-posts', async (req, res) => {
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_FEED_KEY) return res.sendStatus(404);
  if (!matchesSecret(req.get('authorization'), 'Bearer ' + INSTAGRAM_FEED_KEY)) return res.sendStatus(401);
  try {
    if (cache?.expires > Date.now()) return res.json({ data: cache.data });
    feedRequest ||= fetchFeed().finally(() => { feedRequest = undefined; });
    res.json({ data: await feedRequest });
  } catch {
    res.status(502).json({ error: 'Não foi possível consultar o Instagram.' });
  }
});

app.get('/webhook/instagram', (req, res) => {
  if (!META_WEBHOOK_VERIFY_TOKEN || !META_APP_SECRET) return res.sendStatus(404);
  const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
  if (mode !== 'subscribe' || !matchesSecret(token, META_WEBHOOK_VERIFY_TOKEN)) return res.sendStatus(403);
  if (typeof challenge !== 'string' || !/^\d{1,256}$/.test(challenge)) return res.sendStatus(400);
  return res.type('text/plain').send(challenge);
});

app.post('/webhook/instagram',
  (req, res, next) => {
    if (!META_WEBHOOK_VERIFY_TOKEN || !META_APP_SECRET) return res.sendStatus(404);
    if (!req.is('application/json')) return res.sendStatus(415);
    next();
  },
  express.raw({ type: 'application/json', limit: '256kb', inflate: false }),
  (req, res) => {
    const signature = req.get('x-hub-signature-256');
    if (!Buffer.isBuffer(req.body) || !signature || !/^sha256=[0-9a-f]{64}$/i.test(signature)) return res.sendStatus(403);
    const expected = createHmac('sha256', META_APP_SECRET).update(req.body).digest();
    const provided = Buffer.from(signature.slice(7), 'hex');
    if (!timingSafeEqual(provided, expected)) return res.sendStatus(403);

    try {
      JSON.parse(req.body.toString('utf8'));
    } catch {
      return res.sendStatus(400);
    }
    // A integração legada apenas confirma o recebimento.
    return res.status(200).end();
  },
);

app.use((_req, res) => res.sendStatus(404));
app.use((error, _req, res, next) => {
  if (res.headersSent) return next(error);
  const status = [400, 413, 415].includes(error.status) ? error.status : 500;
  res.sendStatus(status);
});

app.listen(Number(PORT), HOST, () => console.log(`Servidor de integração em ${HOST}:${PORT}`))
  .requestTimeout = 15_000;
