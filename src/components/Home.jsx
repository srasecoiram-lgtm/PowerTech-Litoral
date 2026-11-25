import { Link } from 'react-router-dom';
import { Orcamento, Telefone, WhatsApp } from './Contato';
import FaqItem from './FaqItem';
import VideoCard from './VideoCard';
import { CIDADES } from './landingData';
import { faqLd, useDocumentMeta } from '../utils/seo';

const services = [
  {
    title: 'Desentupimento',
    description: 'Pias, ralos, vasos sanitários, colunas e esgoto. Atendimento emergencial 24 horas.',
    image: 'desentupimento.webp',
    path: '/desentupidora',
  },
  {
    title: 'Dedetização',
    description: 'Controle de baratas, cupins, ratos e outras pragas em residências e empresas.',
    image: 'pragas.webp',
    path: '/dedetizacao',
  },
  {
    title: "Caixa d’água e fossa",
    description: 'Limpeza de reservatórios e fossas sépticas, além de hidrojateamento.',
    image: 'limpeza.webp',
    path: '/limpeza-caixa-dagua-fossa',
  },
];

const questions = [
  { p: 'Vocês atendem emergências à noite e nos feriados?', r: 'Sim. O atendimento emergencial de desentupimento é 24 horas, incluindo fins de semana e feriados. Ligue e informe sua cidade e o problema.' },
  { p: 'Como funciona o orçamento?', r: 'Informe a cidade, o tipo de imóvel e o serviço desejado. A equipe avalia o caso, explica o que será feito e passa o orçamento antes do serviço.' },
  { p: 'Como preparar o imóvel para a dedetização?', r: 'Avise a equipe se há crianças, pets, pessoas alérgicas ou alimentos no local. As orientações de preparo, afastamento e retorno dependem do produto e do tipo de aplicação.' },
  { p: 'Vocês emitem laudo técnico?', r: 'A equipe orienta sobre a documentação do serviço, incluindo laudo e certificado de dedetização quando aplicáveis.' },
];

export function HeroMascote({ dedetizacao = false }) {
  const name = dedetizacao ? 'dedetizacao' : 'mascote';
  const [small, large] = dedetizacao ? [212, 377] : [158, 282];
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-orbit" />
      <img className="hero-mascote" src={`/assets/web/${name}-640.webp`}
        srcSet={`/assets/web/${name}-360.webp ${small}w, /assets/web/${name}-640.webp ${large}w`}
        sizes={dedetizacao ? '(max-width: 540px) 155px, 305px' : '(max-width: 540px) 115px, 230px'}
        alt="" width={large} height="640" fetchPriority="high" />
    </div>
  );
}

export default function Home() {
  useDocumentMeta({
    title: 'Desentupidora 24h e Dedetização na Baixada Santista | LitoralTec',
    description: 'Desentupimento 24h, dedetização e limpeza de caixa d’água e fossa em Praia Grande, Santos e região. Peça um orçamento grátis pelo WhatsApp.',
    path: '/',
    jsonLd: faqLd(questions),
  });

  return (
    <>
      <section className="coastal-hero" aria-labelledby="home-heading">
        <div className="container coastal-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Atendimento na Baixada Santista</p>
            <h1 id="home-heading">Desentupidora 24h <em>e dedetização.</em></h1>
            <p>Da emergência no esgoto ao controle de pragas, atendemos casas, condomínios e empresas em Praia Grande, Santos e região.</p>
            <div className="hero-ctas">
              <WhatsApp>Orçamento no WhatsApp</WhatsApp>
              <Telefone>Ligar agora</Telefone>
            </div>
            <a className="hero-quote-link" href="#orcamento">Montar meu pedido</a>
          </div>
          <HeroMascote />
        </div>
      </section>

      <div className="trust-band">
        <ul className="container trust-items" aria-label="Diferenciais de atendimento">
          <li><img src="/assets/Sobre/24h.png" alt="" width="39" height="39" /><div><strong>Emergências 24h</strong><span>Inclusive fins de semana</span></div></li>
          <li><img src="/assets/Sobre/etiqueta-de-preco.png" alt="" width="39" height="39" /><div><strong>Orçamento grátis</strong><span>Valor informado antes do serviço</span></div></li>
          <li><img src="/assets/CRQ-IV.png" alt="" width="39" height="39" /><div><strong>Certificação CRQ-IV</strong><span>Para controle de pragas</span></div></li>
        </ul>
      </div>

      <section className="service-overview section-space" id="servicos" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-intro">
            <h2 id="services-heading">Como podemos ajudar?</h2>
            <p>Escolha o serviço para ver detalhes e solicitar atendimento na sua cidade.</p>
          </div>
          <div className="service-overview-grid">
            {services.map((service) => (
              <article className="service-overview-card" key={service.path}>
                <Link to={service.path}>
                  <img src={`/assets/web/${service.image}`} alt="" width="356" height="220" loading="lazy" decoding="async" />
                  <div className="service-overview-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-action">Ver serviço <span aria-hidden="true">›</span></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Orcamento />

      <section className="section-space coverage" id="areas" aria-labelledby="coverage-heading">
        <div className="container coverage-inner">
          <div>
            <h2 id="coverage-heading">Atendimento no litoral de São Paulo.</h2>
            <p>Atendemos residências, condomínios, comércios e empresas. Selecione sua cidade para consultar o atendimento de desentupimento.</p>
            <ul className="city-list">
              {CIDADES.map(({ slug, nome }) => <li key={slug}><Link to={`/desentupidora?cidade=${slug}`}>{nome}</Link></li>)}
            </ul>
            <Link className="text-action" to="/empresa">Conheça a LitoralTec</Link>
          </div>
          <img src="/assets/web/equipe.webp" alt="Técnico trabalhando na tubulação sob uma pia" width="600" height="300" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="faq section-space" id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-intro">
            <h2 id="faq-heading">Perguntas frequentes</h2>
            <p>Saiba como pedir orçamento e preparar o imóvel para o atendimento.</p>
          </div>
          <div className="faq-lista">
            {questions.map(({ p, r }) => <FaqItem key={p} pergunta={p} resposta={r} />)}
          </div>
        </div>
      </section>

      <section className="section-space videos-secao" id="videos" aria-labelledby="videos-heading">
        <div className="container">
          <div className="section-intro"><h2 id="videos-heading">Serviços em vídeo</h2></div>
          <div className="video-container">
            <VideoCard title="Dedetização automotiva" thumbnail="/assets/web/automotiva.webp" videoUrl="/assets/Videos/Automotiva.mp4" />
            <VideoCard title="Conheça a LitoralTec" thumbnail="/assets/web/equipe.webp" videoUrl="/assets/Videos/Introducao.mp4" />
            <VideoCard title="Dicas sobre cupins" thumbnail="/assets/web/cupins.webp" videoUrl="/assets/Videos/Cupins.mp4" />
          </div>
        </div>
      </section>
    </>
  );
}
