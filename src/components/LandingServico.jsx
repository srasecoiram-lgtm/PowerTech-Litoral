import { useSyncExternalStore } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FaqItem from './FaqItem';
import ServicoCard from './ServicoCard';
import { artigos } from './blogData';
import { landings, CIDADES } from './landingData';
import { whatsappUrl, reportContactConversion } from '../utils/contato';
import { useDocumentMeta, breadcrumbLd, faqLd, serviceLd } from '../utils/seo';
import { Orcamento, Telefone, WhatsApp } from './Contato';
import { HeroMascote } from './Home';

const subscribe = () => () => {};
const serverSearch = () => '';

// Página de destino por serviço. Aceita ?cidade=santos (ou praia-grande,
// sao-vicente, guaruja, cubatao, bertioga, itanhaem, peruibe) para mostrar
// a cidade no título. Use isso no "Sufixo de URL final" de cada grupo de anúncios.
export default function LandingServico({ chave }) {
  const cfg = landings[chave];
  const location = useLocation();
  const search = useSyncExternalStore(subscribe, () => location.search, serverSearch);
  const cidadeSlug = new URLSearchParams(search).get('cidade');
  const cidade = (CIDADES.find((c) => c.slug === cidadeSlug) || {}).nome || null;
  const local = cidade ? `em ${cidade}` : 'na Baixada Santista';
  const sub = (texto) => texto.split('{local}').join(local);

  useDocumentMeta({
    title: sub(cfg.title),
    description: sub(cfg.descricao),
    path: cfg.path,
    jsonLd: [
      breadcrumbLd([
        { nome: 'Início', path: '/' },
        { nome: cfg.nomeCurto, path: cfg.path },
      ]),
      serviceLd({ nome: cfg.servicoNome, descricao: cfg.servicoDescricao, path: cfg.path }),
      faqLd(cfg.faq),
    ],
  });

  const outras = Object.keys(landings).filter((k) => k !== chave);
  const relacionados = cfg.artigos.map((slug) => artigos.find((a) => a.slug === slug)).filter(Boolean);

  return (
    <>
      <section className="coastal-hero landing-hero" aria-labelledby="landing-heading">
        <div className="container coastal-hero-inner">
          <div className="hero-copy">
            <nav className="lp-breadcrumb" aria-label="Você está em">
              <Link to="/">Início</Link> <span aria-hidden="true">/</span> <span aria-current="page">{cfg.nomeCurto}</span>
            </nav>
            <p className="eyebrow"><span /> {cfg.badge}</p>
            <h1 id="landing-heading">{cfg.h1} <em>{local}.</em></h1>
            <p>{cfg.subtitulo}</p>
            <div className="hero-ctas">
              <WhatsApp message={sub(cfg.whats)} placement="service_hero">Orçamento no WhatsApp</WhatsApp>
              <Telefone placement="service_hero">Ligar agora</Telefone>
            </div>
            <a className="hero-quote-link" href="#orcamento">Montar meu pedido</a>
          </div>
          <HeroMascote dedetizacao={chave === 'dedetizacao'} />
        </div>
      </section>

      <section className="lp-secao alt section-space" aria-labelledby="lp-itens-titulo">
        <div className="container">
          <div className="section-intro">
            <h2 id="lp-itens-titulo" className="secao-titulo">{cfg.itensTitulo}</h2>
            <p className="secao-subtitulo">Toque no serviço para pedir um orçamento direto no WhatsApp.</p>
          </div>
          <div className="servicos-grid">
            {cfg.itens.map((s) => {
              const msg = `Olá! Gostaria de um orçamento para ${s.nome.toLowerCase()} ${local}.`;
              return (
                <a
                  key={s.nome}
                  href={whatsappUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reportContactConversion('whatsapp', 'service_card')}
                >
                  <ServicoCard nome={s.nome} imagem={s.imagem} categoria={s.categoria} cor={s.cor} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Orcamento key={cidade || 'regiao'} servico={cfg.path} cidade={cidade ? cidadeSlug : ''} />

      <section className="lp-secao section-space" aria-labelledby="lp-passos-titulo">
        <div className="container">
          <div className="section-intro">
            <h2 id="lp-passos-titulo" className="secao-titulo">Como funciona o atendimento</h2>
          </div>
          <div className="lp-passos">
            {cfg.passos.map((p, i) => (
              <div className="lp-passo" key={p.t}>
                <span className="lp-passo-num">{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-secao alt section-space" aria-labelledby="lp-areas-titulo">
        <div className="container">
          <div className="section-intro">
            <h2 id="lp-areas-titulo" className="secao-titulo">Cidades atendidas</h2>
          </div>
          <ul className="city-list">
            {CIDADES.map((c) => (
              <li key={c.slug}><Link to={`${cfg.path}?cidade=${c.slug}`} aria-current={c.slug === cidadeSlug ? 'location' : undefined}>{c.nome}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq section-space" aria-labelledby="lp-faq-titulo">
        <div className="container">
          <div className="section-intro">
            <h2 id="lp-faq-titulo" className="secao-titulo">Perguntas sobre {cfg.nomeCurto.toLowerCase()}</h2>
          </div>
          <div className="faq-lista">
            {cfg.faq.map((item) => (
              <FaqItem key={item.p} pergunta={item.p} resposta={item.r} />
            ))}
          </div>
        </div>
      </section>

      <section className="lp-secao alt section-space" aria-labelledby="lp-veja-titulo">
        <div className="container">
          <div className="section-intro">
            <h2 id="lp-veja-titulo" className="secao-titulo">Veja também</h2>
          </div>
          <div className="lp-links">
            {outras.map((k) => (
              <Link key={k} to={landings[k].path} className="lp-link-card">
                {landings[k].nomeCurto}
                <small>Ver serviço</small>
              </Link>
            ))}
            {relacionados.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="lp-link-card">
                {a.titulo}
                <small>Artigo do blog</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
