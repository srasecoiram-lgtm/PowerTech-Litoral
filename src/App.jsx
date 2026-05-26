import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BlogSection from './components/BlogSection';
import VideoCard from './components/VideoCard';
import ServicoCard from "./components/ServicoCard"
import Empresa from './components/Empresa';

const servicos = [
  { nome: "Vasos Sanitários", imagem: "/assets/Gerais/vasosSanitarios.png", categoria: "Desentupimentos Gerais", cor: "preto" },
  { nome: "Pias", imagem: "/assets/Gerais/pias.png", categoria: "Desentupimentos Gerais", cor: "preto" },
  { nome: "Esgotos", imagem: "/assets/Gerais/esgotos.png", categoria: "Desentupimentos Gerais", cor: "preto" },
  { nome: "Ralos", imagem: "/assets/Gerais/ralos.png", categoria: "Desentupimentos Gerais", cor: "preto" },
  { nome: "Colunas", imagem: "/assets/Gerais/colunas.png", categoria: "Desentupimentos Gerais", cor: "preto" },
  { nome: "Dedetização", imagem: "/assets/Pragas/dedetizacao.png", categoria: "Controle de Pragas", cor: "dourado" },
  { nome: "Controle de Pombos", imagem: "/assets/Pragas/controle-pombos.png", categoria: "Controle de Pragas", cor: "dourado" },
  { nome: "Desratização", imagem: "/assets/Pragas/desratizacao.png", categoria: "Controle de Pragas", cor: "dourado" },
  { nome: "Descupinização", imagem: "/assets/Pragas/descupinizacao.png", categoria: "Controle de Pragas", cor: "dourado" },
  { nome: "Automotiva", imagem: "/assets/Pragas/dedetizacao_A.png", categoria: "Controle de Pragas", cor: "dourado" },
  { nome: "Hidrojateamento", imagem: "/assets/Limpeza/hidrojateamento.png", categoria: "Limpezas Gerais", cor: "azul" },
  { nome: "Fossa Séptica", imagem: "/assets/Limpeza/fossaseptica.png", categoria: "Limpezas Gerais", cor: "azul" },
  { nome: "Caixas d'Água", imagem: "/assets/Limpeza/caixasdagua.png", categoria: "Limpezas Gerais", cor: "azul" },
];

const avaliacoes = [
  { nome: "Marcos Silva", nota: 5, texto: "Atendimento excelente e rápido! Chamei para desentupimento de esgoto às 22h e em menos de 1 hora estavam aqui. Super recomendo a Powertec Litoral!", cidade: "Santos, SP" },
  { nome: "Carla Mendes", nota: 5, texto: "Fiz dedetização completa no meu apartamento. Resultado incrível, profissionais muito educados e o serviço foi impecável. Sem cheiro, sem resíduos.", cidade: "Praia Grande, SP" },
  { nome: "Roberto Lima", nota: 5, texto: "Contratei para dedetização do meu restaurante. Eles têm certificado do CRQ e todos os documentos em dia, essencial para minha vigilância sanitária.", cidade: "São Vicente, SP" },
  { nome: "Ana Paula Costa", nota: 5, texto: "Descupinização do meu imóvel com garantia! Já tinha tentado outros serviços mas só a Powertec resolveu de vez o problema de cupins.", cidade: "Cubatão, SP" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StarRating({ nota }) {
  return (
    <div className="star-rating" aria-label={`${nota} de 5 estrelas`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= nota ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5513998017752?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Fale conosco pelo WhatsApp - Atendimento 24 horas"
    >
      <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
      <span className="floating-pulse"></span>
    </a>
  );
}

function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className={`faq-item ${aberto ? "aberto" : ""}`} itemScope itemType="https://schema.org/Question">
      <button
        className="faq-pergunta"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        itemProp="name"
      >
        {pergunta}
        <span className="faq-seta">{aberto ? "▲" : "▼"}</span>
      </button>
      {aberto && (
        <div className="faq-resposta" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <p itemProp="text">{resposta}</p>
        </div>
      )}
    </div>
  );
}

function HomePage() {
  const [filtro, setFiltro] = useState("Todos");
  const categorias = ["Todos", "Desentupimentos Gerais", "Controle de Pragas", "Limpezas Gerais"];
  const servicosFiltrados = filtro === "Todos" ? servicos : servicos.filter(s => s.categoria === filtro);

  return (
    <>
      <section className="hero" aria-label="Dedetização e Desentupidora 24 horas no Litoral de SP">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">⚡ Atendimento Emergencial 24h</div>
          <h1 className="hero-titulo">
            Dedetização e Desentupidora <br />
            <span className="hero-destaque">no Litoral de São Paulo</span>
          </h1>
          <p className="hero-subtitulo">
            Dedetização, desratização, descupinização, desentupimento de esgoto, fossa séptica e muito mais.
            Atendemos Santos, Praia Grande, São Vicente, Guarujá, Cubatão e toda região.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/5513998017752?text=Olá!%20Preciso%20de%20orçamento%20urgente." target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              <img src="/assets/icons/whatsapp-logo.png" alt="" aria-hidden="true" />
              Orçamento Gratuito Agora
            </a>
            <a href="tel:+5513998017752" className="btn-hero-secondary">
              📞 (13) 99801-7752
            </a>
          </div>
          <div className="hero-selos">
            <span>✅ CRQ Certificado</span>
            <span>✅ Atendimento 24h</span>
            <span>✅ Garantia de Serviço</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/Power_Tec_Funcionario.png" alt="Profissional de dedetização e desentupimento da Powertec Litoral" loading="eager" />
        </div>
      </section>

      <div className="barra-urgencia" role="banner">
        <marquee behavior="scroll" direction="left" scrollamount="4">
          🚨 EMERGÊNCIA? Ligue agora: (13) 99801-7752 &nbsp;&nbsp;|&nbsp;&nbsp; Desentupimento de esgoto 24h &nbsp;&nbsp;|&nbsp;&nbsp; Dedetização residencial e comercial &nbsp;&nbsp;|&nbsp;&nbsp; Atendemos toda a Baixada Santista &nbsp;&nbsp;|&nbsp;&nbsp; Orçamento grátis e sem compromisso 🚨
        </marquee>
      </div>

      <main className="secao-servicos" id="servicos">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">O que fazemos</span>
            <h2 className="secao-titulo">Serviços de Dedetização e Desentupimento</h2>
            <p className="secao-subtitulo">Soluções completas para residências, comércios e indústrias. Profissionais certificados com equipamentos de última geração.</p>
          </div>
          <div className="filtro-categorias" role="group" aria-label="Filtrar serviços por categoria">
            {categorias.map(cat => (
              <button key={cat} className={`filtro-btn ${filtro === cat ? "ativo" : ""}`} onClick={() => setFiltro(cat)} aria-pressed={filtro === cat}>
                {cat}
              </button>
            ))}
          </div>
          <section className="servicos-grid" aria-label={`Serviços de ${filtro}`}>
            {servicosFiltrados.map((s, i) => {
              const mensagem = `Olá, acessei o site da Powertec Litoral e gostaria de informações sobre: *${s.categoria} - ${s.nome}*`;
              const url = `https://wa.me/5513998017752?text=${encodeURIComponent(mensagem)}`;
              return (
                <a href={url} target="_blank" rel="noopener noreferrer" key={i} aria-label={`Solicitar ${s.nome} - ${s.categoria}`}>
                  <ServicoCard nome={s.nome} imagem={s.imagem} categoria={s.categoria} cor={s.cor} />
                </a>
              );
            })}
          </section>
        </div>
      </main>

      <section className="banner-cta" aria-label="Contato de urgência">
        <div className="container banner-cta-inner">
          <div>
            <h2>Problema urgente com esgoto ou pragas?</h2>
            <p>Estamos disponíveis 24 horas por dia, 7 dias por semana. Atendimento rápido e eficiente.</p>
          </div>
          <a href="https://wa.me/5513998017752?text=Tenho%20uma%20urgência%20e%20preciso%20de%20atendimento%20agora." target="_blank" rel="noopener noreferrer" className="btn-cta-banner">
            Falar com especialista agora
          </a>
        </div>
      </section>

      <section className="porque-escolher" id="diferenciais" aria-labelledby="porque-titulo">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">Nossos diferenciais</span>
            <h2 id="porque-titulo" className="secao-titulo">Por que contratar a <span className="dourado">Powertec Litoral?</span></h2>
          </div>
          <div className="diferenciais-grid-new">
            <article className="diferencial-card">
              <div className="diferencial-icon"><img src="/assets/Sobre/avaliacao-do-cliente.png" alt="Clientes satisfeitos" /></div>
              <h3>Milhares de Clientes Satisfeitos</h3>
              <p>Anos de experiência com serviços de dedetização, desratização e desentupimento na região da Baixada Santista.</p>
            </article>
            <article className="diferencial-card">
              <div className="diferencial-icon"><img src="/assets/Sobre/24h.png" alt="Atendimento 24 horas" /></div>
              <h3>Atendimento 24h / 7 dias</h3>
              <p>Emergências não esperam horário comercial. Nosso time de desentupidores está disponível a qualquer momento.</p>
            </article>
            <article className="diferencial-card">
              <div className="diferencial-icon"><img src="/assets/Sobre/encanador.png" alt="Técnicos certificados" /></div>
              <h3>Técnicos Certificados</h3>
              <p>Todos nossos profissionais são treinados e certificados. Usamos produtos homologados e seguros para sua família.</p>
            </article>
            <article className="diferencial-card destaque">
              <div className="diferencial-icon"><img src="/assets/Sobre/etiqueta-de-preco.png" alt="Melhor preço" /></div>
              <h3>Melhor Custo-Benefício</h3>
              <p>Orçamento gratuito e transparente. Preço justo sem surpresas. Garantia de satisfação em todos os serviços.</p>
            </article>
          </div>
        </div>
        <div className="funcionario-lateral">
          <img src="/assets/Power_Tec_Funcionario_2.png" alt="Profissional de dedetização Powertec Litoral" loading="lazy" />
        </div>
      </section>

      <section className="avaliacoes" id="avaliacoes" aria-labelledby="avaliacoes-titulo">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">Avaliações</span>
            <h2 id="avaliacoes-titulo" className="secao-titulo">O que nossos clientes dizem</h2>
            <p className="secao-subtitulo">Mais de 500 avaliações 5 estrelas no Google</p>
          </div>
          <div className="avaliacoes-grid">
            {avaliacoes.map((av, i) => (
              <article key={i} className="avaliacao-card" itemScope itemType="https://schema.org/Review">
                <StarRating nota={av.nota} />
                <p itemProp="reviewBody">"{av.texto}"</p>
                <footer>
                  <strong itemProp="author">{av.nome}</strong>
                  <span>{av.cidade}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="areas-atuacao-nova" id="areas" aria-labelledby="areas-titulo">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">Onde atendemos</span>
            <h2 id="areas-titulo" className="secao-titulo">Dedetização e Desentupimento em toda a Baixada Santista</h2>
            <p className="secao-subtitulo">Atendemos residências, condomínios, empresas, restaurantes, hotéis e indústrias em toda a região.</p>
          </div>
          <div className="cidades-grid" aria-label="Cidades atendidas">
            {["Santos", "Praia Grande", "São Vicente", "Guarujá", "Cubatão", "Bertioga", "Peruíbe", "Itanhaém"].map(cidade => (
              <div key={cidade} className="cidade-item">
                <span className="cidade-icon">📍</span>
                <span>{cidade}</span>
              </div>
            ))}
          </div>
          <div className="tipos-imoveis">
            <article className="tipo-imovel">
              <img src="/assets/Sobre/predio-comercial.png" alt="Dedetização em prédios residenciais" />
              <div>
                <h3>Imóvel Residencial e Predial</h3>
                <p>Dedetização residencial, desentupimento de esgoto, limpeza de caixa d'água e controle de pragas para casas e apartamentos.</p>
              </div>
            </article>
            <article className="tipo-imovel">
              <img src="/assets/Sobre/barraca-de-comida.png" alt="Dedetização em restaurantes e comércios" />
              <div>
                <h3>Imóvel Comercial e Restaurantes</h3>
                <p>Dedetização para restaurantes, bares, hotéis e comércios. Emitimos laudo técnico e ART para vigilância sanitária.</p>
              </div>
            </article>
            <article className="tipo-imovel">
              <img src="/assets/Sobre/pomba.png" alt="Controle de pombos urbanos" />
              <div>
                <h3>Controle de Pombos Urbanos</h3>
                <p>Afastamento e controle de pombos em telhados, coberturas e fachadas com técnicas humanizadas e eficazes.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="clientes-licencas" id="clientes" aria-labelledby="clientes-titulo">
        <div className="container">
          <h2 id="clientes-titulo">Nossos <span className="dourado">Clientes</span></h2>
          <div className="logos-clientes">
            <img src="/assets/Clientes/Prefeitura.png" alt="Prefeitura de Santos" loading="lazy" />
            <img src="/assets/Clientes/Governo.png" alt="Governo de São Paulo" loading="lazy" />
            <img src="/assets/Clientes/Filippo.png" alt="Construtora Filippo" loading="lazy" />
            <img src="/assets/Clientes/Sucen.png" alt="SUCEN" loading="lazy" />
            <img src="/assets/Clientes/MegaFisoterapia.png" alt="Grupo MegaFisioterapia" loading="lazy" />
            <img src="/assets/Clientes/Essencis.png" alt="Essencis Soluções Ambientais" loading="lazy" />
            <img src="/assets/Clientes/france.png" alt="Residencial Boulevard in France" loading="lazy" />
          </div>
        </div>
        <div className="container licencas-box">
          <h2>Licenças e <span className="dourado">Certificações</span></h2>
          <div className="licencas-conteudo">
            <img src="/assets/CRQ-IV.png" alt="CRQ IV Região" loading="lazy" />
            <div className="licenca-texto">
              <h3>Empresa certificada pelo CRQ-IV</h3>
              <p>A Powertec Litoral possui registro e certificação pelo Conselho Regional de Química da IV Região, garantindo que todos os serviços de dedetização e controle de pragas são executados com segurança, dentro das normas técnicas e com produtos regularizados pela ANVISA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="videos-secao" id="videos" aria-labelledby="videos-titulo">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">Conteúdo</span>
            <h2 id="videos-titulo" className="secao-titulo">Veja nossos serviços em ação</h2>
          </div>
          <div className="video-container">
            <VideoCard title="Dedetização Automotiva" thumbnail="/assets/FundoP.png" videoUrl="/assets/Videos/Automotiva.mp4" />
            <VideoCard title="Apresentação Powertec" thumbnail="/assets/FundoP.png" videoUrl="/assets/Videos/Introducao.mp4" />
            <VideoCard title="Dicas contra Cupins" thumbnail="/assets/FundoP.png" videoUrl="/assets/Videos/Cupins.mp4" />
          </div>
        </div>
      </section>

      <section className="faq" id="faq" aria-labelledby="faq-titulo">
        <div className="container">
          <div className="secao-header">
            <span className="secao-tag">Dúvidas frequentes</span>
            <h2 id="faq-titulo" className="secao-titulo">Perguntas sobre Dedetização e Desentupimento</h2>
          </div>
          <div className="faq-lista">
            {[
              { p: "Qual o prazo de garantia da dedetização?", r: "Todos os nossos serviços de dedetização têm garantia de 90 dias. Em caso de reincidência, retornamos sem custo adicional. Para contratos recorrentes, oferecemos condições especiais." },
              { p: "A dedetização é segura para crianças e animais?", r: "Sim! Utilizamos produtos de última geração registrados na ANVISA, de baixa toxicidade e sem odor. Recomendamos apenas que crianças e pets saiam por 2 a 4 horas durante a aplicação." },
              { p: "Vocês atendem emergências de desentupimento de esgoto à noite?", r: "Sim, nosso serviço de desentupimento funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Atendimento emergencial para toda a Baixada Santista." },
              { p: "Como funciona a limpeza de caixa d'água?", r: "Nossa equipe realiza esvaziamento, escovação, desinfecção com produtos adequados e emissão de laudo técnico. Serviço obrigatório a cada 6 meses conforme portaria do Ministério da Saúde." },
              { p: "Vocês emitem laudo para a vigilância sanitária?", r: "Sim! Emitimos laudo técnico, ART e certificado de dedetização válidos para vigilância sanitária, alvarás de funcionamento e condomínios. Empresa regularizada no CRQ-IV." },
            ].map((item, i) => <FaqItem key={i} pergunta={item.p} resposta={item.r} />)}
          </div>
        </div>
      </section>

      <footer className="footer-nova" role="contentinfo">
        <div className="container footer-grid">
          <div className="footer-col">
            <img src="/assets/Logo.png" alt="Powertec Litoral - Dedetização e Desentupidora" className="footer-logo" loading="lazy" />
            <p>Especialistas em dedetização, desratização, descupinização e desentupimento no Litoral de São Paulo desde 2010.</p>
            <div className="footer-selos">
              <img src="/assets/CRQ-IV.png" alt="CRQ IV" style={{ height: "50px" }} loading="lazy" />
            </div>
          </div>
          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Dedetização Residencial</a></li>
              <li><a href="#servicos">Dedetização Comercial</a></li>
              <li><a href="#servicos">Desratização</a></li>
              <li><a href="#servicos">Descupinização</a></li>
              <li><a href="#servicos">Desentupimento de Esgoto</a></li>
              <li><a href="#servicos">Limpeza de Fossa Séptica</a></li>
              <li><a href="#servicos">Limpeza de Caixa d'Água</a></li>
              <li><a href="#servicos">Hidrojateamento</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Cidades Atendidas</h4>
            <ul>
              <li>Dedetização em Santos</li>
              <li>Dedetização em Praia Grande</li>
              <li>Dedetização em São Vicente</li>
              <li>Dedetização em Guarujá</li>
              <li>Desentupimento em Cubatão</li>
              <li>Desentupimento em Bertioga</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contato 24h</h4>
            <p><strong>WhatsApp:</strong><br /><a href="https://wa.me/5513998017752">(13) 99801-7752</a></p>
            <p><strong>E-mail:</strong><br />contato@desentupidoralitoralpw.com.br</p>
            <div className="footer-redes">
              <a href="https://www.instagram.com/powertec.litoral/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/assets/icons/instagram.png" alt="Instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/assets/icons/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Powertec Litoral - Dedetização e Desentupidora | CRQ-IV Certificado</p>
          <p>
            <a href="#">Política de Privacidade</a> |
            <a href="#">Termos de Uso</a>
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <header className="header-nova" role="banner">
          <div className="top-bar-nova">
            <Link to="/" className="logo-link" aria-label="Powertec Litoral - Página inicial">
              <img src="/assets/Logo.png" alt="Powertec Litoral Dedetização e Desentupidora" className="logo" />
            </Link>
            <div className="header-contato">
              <div className="header-urgencia">
                <span className="badge-24h">24h</span>
                <div>
                  <p className="header-atendimento">Emergência? Ligue agora!</p>
                  <a href="tel:+5513998017752" className="header-telefone">
                    <img src="/assets/icons/whatsapp-logo.png" alt="" aria-hidden="true" className="icon" />
                    (13) 99801-7752
                  </a>
                </div>
              </div>
              <a href="https://wa.me/5513998017752?text=Olá!%20Preciso%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="btn-whatsapp-header">
                Orçamento Grátis
              </a>
            </div>
          </div>
          <nav className="nav-nova" role="navigation" aria-label="Menu principal">
            <Link to="/" className="nav-link">Início</Link>
            <a href="/#servicos" className="nav-link">Serviços</a>
            <a href="/#areas" className="nav-link">Áreas de Atuação</a>
            <Link to="/empresa" className="nav-link">Empresa</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <a href="/#faq" className="nav-link">FAQ</a>
            <a href="https://wa.me/5513998017752" target="_blank" rel="noopener noreferrer" className="nav-link nav-cta">
              📞 Contato
            </a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>

        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
