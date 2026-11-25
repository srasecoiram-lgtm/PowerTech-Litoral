import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import LandingServico from './components/LandingServico';
import Empresa from './components/Empresa';
import BlogSection from './components/BlogSection';
import BarraContatoMobile from './components/BarraContatoMobile';
import AvisoCookies from './components/AvisoCookies';
import { Privacidade, Termos } from './components/Legal';
import { Telefone, WhatsApp } from './components/Contato';
import { EMAIL_CONTATO, TELEFONE_TEXTO } from './utils/contato';
import { landings } from './components/landingData';
import { useDocumentMeta, ROBOTS_NOINDEX } from './utils/seo';

const menu = [
  ['/', 'Início'],
  ['/desentupidora', 'Desentupidora'],
  ['/dedetizacao', 'Dedetização'],
  ['/limpeza-caixa-dagua-fossa', "Caixa d’água e fossa"],
  ['/empresa', 'Empresa'],
  ['/blog', 'Blog'],
];

function PageNavigation() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const target = document.getElementById(hash.slice(1));
    if (target && hash !== '#conteudo') target.scrollIntoView();
  }, [pathname, search, hash]);
  return null;
}

function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setAberto(false), [pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="header-top">
        <div className="container header-top-inner">
          <span>Praia Grande, Santos e região</span>
          <Telefone className="top-tel" placement="header_phone">Emergências 24h · {TELEFONE_TEXTO}</Telefone>
        </div>
      </div>
      <div className="container header-main">
        <Link to="/" className="brand" aria-label="LitoralTec, página inicial">
          <img src="/assets/web/logo.webp" alt="LitoralTec" width="330" height="121" />
        </Link>
        <button type="button" className="menu-toggle" onClick={() => setAberto(!aberto)}
          aria-expanded={aberto} aria-controls="menu-principal">{aberto ? 'Fechar' : 'Menu'}</button>
        <nav id="menu-principal" className={aberto ? 'site-nav is-open' : 'site-nav'} aria-label="Menu principal"
          onKeyDown={(event) => {
            if (event.key === 'Escape' && aberto) {
              setAberto(false);
              document.querySelector('.menu-toggle')?.focus();
            }
          }}>
          {menu.map(([url, label]) => (
            <NavLink key={url} to={url} end={url === '/'} onClick={() => setAberto(false)}>{label}</NavLink>
          ))}
        </nav>
        <WhatsApp className="header-whatsapp" placement="header_whatsapp">WhatsApp</WhatsApp>
      </div>
    </header>
  );
}

function Rodape({ onCookies }) {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link to="/" className="brand"><img src="/assets/web/logo.webp" alt="LitoralTec, início" width="330" height="121" loading="lazy" /></Link>
          <p>Desentupimento, dedetização e limpeza na Baixada Santista.</p>
        </div>
        <div>
          <h2>Serviços</h2>
          <ul>{Object.values(landings).map(({ path, nomeCurto }) => <li key={path}><Link to={path}>{nomeCurto}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Contato 24h</h2>
          <ul>
            <li><Telefone className="footer-tel" placement="footer_phone" /></li>
            <li><WhatsApp className="footer-whatsapp" icon={false} placement="footer_whatsapp">WhatsApp</WhatsApp></li>
            <li><a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a></li>
            <li><a href="https://www.instagram.com/powertec.litoral/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-legal">
        <p>© LitoralTec</p>
        <div>
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/termos">Termos de uso</Link>
          <button type="button" onClick={onCookies}>Preferências de cookies</button>
        </div>
      </div>
    </footer>
  );
}

function NaoEncontrada() {
  useDocumentMeta({
    title: 'Página não encontrada | LitoralTec',
    description: 'Confira os serviços e canais de atendimento da LitoralTec.',
    path: '/404',
    robots: ROBOTS_NOINDEX,
  });

  return (
    <section className="nao-encontrada container">
      <h1>Página não encontrada</h1>
      <p>Você pode voltar ao início ou ligar para a LitoralTec.</p>
      <div className="nao-encontrada-botoes">
        <Link className="btn-hero-primary" to="/">Voltar ao início</Link>
        <Telefone className="outline-light" placement="not_found" />
      </div>
    </section>
  );
}

export default function App() {
  const [preferencias, setPreferencias] = useState(false);

  return (
    <div className="app">
      <PageNavigation />
      <Cabecalho />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.entries(landings).map(([key, { path }]) => (
            <Route key={path} path={path} element={<LandingServico key={key} chave={key} />} />
          ))}
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/:slug" element={<BlogSection fallback={<NaoEncontrada />} />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape onCookies={() => setPreferencias(true)} />
      <BarraContatoMobile />
      <AvisoCookies preferencias={preferencias} onClose={() => setPreferencias(false)} />
    </div>
  );
}
