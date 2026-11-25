const CONSENT_KEY = 'lt_ads_consent_v2';
const ADS_ID = 'AW-16702896364';
const CONTACT_CONVERSION = ADS_ID + '/3_jSCICevdkZEOzxx5w-';
const LIVE_HOSTS = new Set(['www.desentupidoraltec.com.br', 'desentupidoraltec.com.br']);
const CAMPAIGN_KEYS = ['gclid', 'gbraid', 'wbraid', 'gad_source', 'gad_campaignid', 'utm_source', 'utm_medium', 'utm_campaign'];

let escolha = null;
let paginaDeEntrada;
let carregou = false;
const ultimosCliques = new Map();

function atualizarGoogle(valor) {
  window.gtag('consent', 'update', {
    ad_storage: valor,
    ad_user_data: valor,
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

function carregarGoogleAds() {
  if (carregou || !LIVE_HOSTS.has(window.location.hostname)) return;
  carregou = true;
  window.gtag('js', new Date());
  window.gtag('config', ADS_ID, {
    allow_ad_personalization_signals: false,
    page_location: paginaDeEntrada,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
  document.head.appendChild(script);
}

export function iniciarConsentimento() {
  const location = new URL(window.location.href);
  const campaign = new URLSearchParams();
  for (const key of CAMPAIGN_KEYS) {
    const value = location.searchParams.get(key);
    if (value && /^[a-zA-Z0-9_.~-]{1,240}$/.test(value)) campaign.set(key, value);
  }
  location.search = campaign.toString();
  location.hash = '';
  paginaDeEntrada = location.toString();

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });

  try {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    escolha = saved === 'granted' || saved === 'denied' ? saved : null;
  } catch {
    escolha = null;
  }
  if (escolha === 'granted') {
    atualizarGoogle(escolha);
    carregarGoogleAds();
  }
}

export function lerConsentimento() {
  return escolha;
}

export function escolherConsentimento(valor) {
  const retirar = carregou && escolha === 'granted' && valor === 'denied';
  escolha = valor;
  let persistiu = false;
  try {
    window.localStorage.setItem(CONSENT_KEY, valor);
    persistiu = true;
  } catch {
    // Mantém a decisão em memória se o navegador bloquear o armazenamento.
  }
  atualizarGoogle(valor);
  if (valor === 'granted') carregarGoogleAds();
  if (retirar && persistiu) window.location.reload();
}

export function medirContato(canal, posicao) {
  if (escolha !== 'granted' || !carregou) return;
  const agora = Date.now();
  if (agora - (ultimosCliques.get(canal) || 0) < 1800) return;
  ultimosCliques.set(canal, agora);
  window.gtag('event', 'conversion', {
    send_to: CONTACT_CONVERSION,
    contact_method: canal,
    contact_placement: posicao,
    page_location: window.location.origin + window.location.pathname,
  });
}
