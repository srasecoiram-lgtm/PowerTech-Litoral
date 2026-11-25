import { Link } from 'react-router-dom';
import { EMAIL_CONTATO } from '../utils/contato';
import { useDocumentMeta, breadcrumbLd } from '../utils/seo';

const ATUALIZADO = '25 de novembro de 2026';

export function Privacidade() {
  useDocumentMeta({
    title: 'Política de Privacidade | LitoralTec',
    description: 'Veja como a LitoralTec trata dados pessoais, cookies e informações de contato, conforme a LGPD.',
    path: '/privacidade',
    jsonLd: breadcrumbLd([
      { nome: 'Início', path: '/' },
      { nome: 'Política de Privacidade', path: '/privacidade' },
    ]),
  });

  return (
    <section className="legal container">
      <h1>Política de Privacidade</h1>
      <p className="atualizado">Última atualização: {ATUALIZADO}</p>

      <p>
        Esta política explica como a LitoralTec (Desentupidora e Dedetização no Litoral de SP) trata as informações
        de quem visita este site.
      </p>

      <h2>1. Quais dados tratamos</h2>
      <ul>
        <li>
          <strong>Dados de navegação:</strong> páginas visitadas, tipo de dispositivo e navegador, e a origem do acesso
          (por exemplo, um anúncio do Google). A medição pelo Google Ads começa se você aceitar os cookies.
        </li>
        <li>
          <strong>Dados de contato:</strong> o formulário prepara uma mensagem no seu navegador. Ao escolher abrir o
          WhatsApp, os detalhes entram na mensagem naquele aplicativo. A LitoralTec recebe o que você decidir enviar.
        </li>
      </ul>

      <h2>2. Para que usamos</h2>
      <ul>
        <li>Responder pedidos de orçamento e prestar os serviços contratados.</li>
        <li>Medir o desempenho do site e dos nossos anúncios (Google Ads).</li>
        <li>Melhorar o conteúdo e a experiência de navegação.</li>
      </ul>

      <h2>3. Cookies</h2>
      <p>
        Com sua permissão, a tag do Google Ads mede cliques nos botões de WhatsApp e telefone. Os detalhes do
        orçamento ficam fora dessa medição. O botão Preferências de cookies, no rodapé, permite mudar sua escolha.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>
        Não vendemos dados pessoais. Os dados de navegação são processados pelo Google para medição e publicidade, e
        as conversas por WhatsApp seguem a política de privacidade do próprio aplicativo.
      </p>

      <h2>5. Seus direitos</h2>
      <p>
        Pela LGPD você pode pedir confirmação de que tratamos seus dados, acesso, correção, anonimização ou exclusão,
        e revogar um consentimento a qualquer momento. Para isso, escreva para{' '}
        <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados apenas pelo tempo necessário para as finalidades acima ou para cumprir obrigações legais.
      </p>

      <h2>7. Alterações</h2>
      <p>
        Podemos atualizar esta política. A data da última atualização fica sempre no topo desta página. Veja também os{' '}
        <Link to="/termos">Termos de Uso</Link>.
      </p>
    </section>
  );
}

export function Termos() {
  useDocumentMeta({
    title: 'Termos de Uso | LitoralTec',
    description: 'Termos de uso do site da LitoralTec, Desentupidora e Dedetização no Litoral de SP.',
    path: '/termos',
    jsonLd: breadcrumbLd([
      { nome: 'Início', path: '/' },
      { nome: 'Termos de Uso', path: '/termos' },
    ]),
  });

  return (
    <section className="legal container">
      <h1>Termos de Uso</h1>
      <p className="atualizado">Última atualização: {ATUALIZADO}</p>

      <p>Ao usar este site você concorda com os termos abaixo.</p>

      <h2>1. Finalidade do site</h2>
      <p>
        Este site apresenta os serviços da LitoralTec e facilita o contato para orçamentos. As informações têm caráter
        informativo e não substituem a avaliação técnica no local.
      </p>

      <h2>2. Orçamentos e valores</h2>
      <p>
        Os orçamentos são feitos por WhatsApp ou telefone, sem compromisso. Valores e prazos são confirmados no
        atendimento, conforme o serviço e as condições do local.
      </p>

      <h2>3. Conteúdo do blog</h2>
      <p>
        Os artigos do blog são orientações gerais e não substituem a análise de um profissional. Em caso de dúvida ou
        emergência, entre em contato com a nossa equipe.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Textos, marcas, logotipos e imagens deste site pertencem à LitoralTec ou são usados com autorização, e não
        podem ser copiados sem permissão.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O site pode apontar para serviços de terceiros, como WhatsApp e Instagram. Não nos responsabilizamos pelo
        conteúdo ou pelas políticas desses serviços.
      </p>

      <h2>6. Privacidade</h2>
      <p>
        O tratamento de dados está descrito na <Link to="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre estes termos: <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>.
      </p>
    </section>
  );
}
