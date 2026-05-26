import React from 'react';
import '../styles/Empresa.css'; // Importa os estilos

function Empresa() {
  return (
    <section className="empresa">
      {/* Nossa História e Estrutura */}
      <div className="topo">
        <div className="bloco">
          <img src="/assets/Empresa/about1.png" alt="Nossa História" />
          <h2>Nossa História</h2>
          <p>
            A Powertec Desentupidora e Dedetizadora iniciou suas operações comerciais
            no ano de 2011 com o objetivo de oferecer Serviços Profissionais de
            Desentupimento, Manutenção Interna de Redes de Esgoto e Controle de Pragas,
            com qualidade e rapidez...
          </p>
        </div>
        <div className="bloco">
          <img src="/assets/Empresa/about2.png" alt="Nossa Estrutura" />
          <h2>Nossa Estrutura</h2>
          <p>
            Pensando na comodidade e plena satisfação de nossos clientes, colaboradores
            e parceiros comerciais, nós moldamos nossos esforços no que diz respeito aos
            investimentos em estrutura física, equipamentos modernos e equipe profissional...
          </p>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="mvv">
        <h2>Missão, Visão e Valores</h2>
        <div className="blocos">
          <div className="card">
            <img src="/assets/Empresa/about3.png" alt="Missão" />
            <h3>Missão</h3>
            <p>
              Cuidar da sua saúde e do bem estar da sua família. Buscamos a excelência na
              prestação de Serviços de Desentupimento, Controle Integrado de Pragas e
              Manutenção de Redes Internas de Esgoto.
            </p>
          </div>
          <div className="card">
            <img src="/assets/Empresa/about4.png" alt="Visão" />
            <h3>Visão</h3>
            <p>
              Buscamos a constante evolução com o objetivo de oferecer serviços de qualidade,
              com preços acessíveis e atendimento de alto nível alinhado ao mínimo impacto nacional.
            </p>
          </div>
          <div className="card">
            <img src="/assets/Empresa/about5.png" alt="Valores" />
            <h3>Valores</h3>
            <p>
              Respeito ao meio ambiente, cuidado com a saúde de Clientes, Colaboradores e Parceiros,
              valorização da Pontualidade, Agilidade e Eficiência, são os princípios que guiam nossa
              direção comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empresa;
