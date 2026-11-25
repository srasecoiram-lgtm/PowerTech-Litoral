import '../styles/Empresa.css';
import { Telefone, WhatsApp } from './Contato';
import { useDocumentMeta, breadcrumbLd } from '../utils/seo';

function Empresa() {
  useDocumentMeta({
    title: 'Sobre a LitoralTec | Desentupidora e Dedetizadora no Litoral SP',
    description: 'Conheça a LitoralTec: história, estrutura, missão, visão e valores da desentupidora e dedetizadora que atende toda a Baixada Santista.',
    path: '/empresa',
    jsonLd: breadcrumbLd([
      { nome: 'Início', path: '/' },
      { nome: 'Empresa', path: '/empresa' },
    ]),
  });

  return (
    <section className="empresa">
      <h1 className="empresa-titulo">Sobre a LitoralTec</h1>

      {/* Nossa História e Estrutura */}
      <div className="topo">
        <div className="bloco">
          <img src="/assets/Empresa/about1.png" alt="Nossa História" loading="lazy" decoding="async" />
          <h2>Nossa História</h2>
          <p>
            A LitoralTec Desentupidora e Dedetizadora iniciou suas operações comerciais
            no ano de 2011 com o objetivo de oferecer Serviços Profissionais de
            Desentupimento, Manutenção Interna de Redes de Esgoto e Controle de Pragas,
            para residências, condomínios e empresas.
          </p>
        </div>
        <div className="bloco">
          <img src="/assets/Empresa/about2.png" alt="Nossa Estrutura" loading="lazy" decoding="async" />
          <h2>Nossa Estrutura</h2>
          <p>
            Pensando na comodidade e plena satisfação de nossos clientes, colaboradores
            e parceiros comerciais, nós moldamos nossos esforços no que diz respeito aos
            investimentos em estrutura física, equipamentos e equipe profissional.
          </p>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="mvv">
        <h2>Missão, Visão e Valores</h2>
        <div className="blocos">
          <div className="card">
            <img src="/assets/Empresa/about3.png" alt="Missão" loading="lazy" decoding="async" />
            <h3>Missão</h3>
            <p>
              Cuidar da sua saúde e do bem estar da sua família. Buscamos a excelência na
              prestação de Serviços de Desentupimento, Controle Integrado de Pragas e
              Manutenção de Redes Internas de Esgoto.
            </p>
          </div>
          <div className="card">
            <img src="/assets/Empresa/about4.png" alt="Visão" loading="lazy" decoding="async" />
            <h3>Visão</h3>
            <p>
              Buscamos a constante evolução com o objetivo de oferecer serviços de qualidade,
              com preços acessíveis e atendimento de alto nível alinhado ao mínimo impacto ambiental.
            </p>
          </div>
          <div className="card">
            <img src="/assets/Empresa/about5.png" alt="Valores" loading="lazy" decoding="async" />
            <h3>Valores</h3>
            <p>
              Respeito ao meio ambiente, cuidado com a saúde de Clientes, Colaboradores e Parceiros,
              valorização da Pontualidade, Agilidade e Eficiência, são os princípios que guiam nossa
              direção comercial.
            </p>
          </div>
        </div>
      </div>

      {/* Chamada para contato */}
      <div className="empresa-cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Atendimento 24 horas em toda a Baixada Santista. Orçamento grátis e sem compromisso.</p>
        <div className="empresa-cta-botoes">
          <WhatsApp placement="company">
            Chamar no WhatsApp
          </WhatsApp>
          <Telefone placement="company" />
        </div>
      </div>
    </section>
  );
}

export default Empresa;
