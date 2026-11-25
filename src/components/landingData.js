// ================================================
// Páginas de serviço (destino dos anúncios).
// Para criar outra página: adicione um bloco aqui e uma <Route> no App.jsx.
// {local} vira "em Santos" (quando o anúncio usa ?cidade=santos)
// ou "na Baixada Santista" (padrão).
// Só use afirmações que a empresa realmente cumpre.
// ================================================

export const CIDADES = [
  { slug: 'santos', nome: 'Santos' },
  { slug: 'praia-grande', nome: 'Praia Grande' },
  { slug: 'sao-vicente', nome: 'São Vicente' },
  { slug: 'guaruja', nome: 'Guarujá' },
  { slug: 'cubatao', nome: 'Cubatão' },
  { slug: 'bertioga', nome: 'Bertioga' },
  { slug: 'itanhaem', nome: 'Itanhaém' },
  { slug: 'peruibe', nome: 'Peruíbe' },
];

const FAQ_CIDADES = {
  p: 'Quais cidades a LitoralTec atende?',
  r: 'Atendemos Santos, Praia Grande, São Vicente, Guarujá, Cubatão, Bertioga, Itanhaém, Peruíbe e toda a Baixada Santista.',
};

const FAQ_ORCAMENTO = {
  p: 'Como recebo o orçamento?',
  r: 'Pelo WhatsApp ou pelo telefone (13) 99801-7752. O orçamento é grátis e sem compromisso.',
};

export const landings = {
  desentupidora: {
    path: '/desentupidora',
    nomeCurto: 'Desentupidora',
    badge: 'Atendimento Emergencial 24h',
    h1: 'Desentupidora 24 horas',
    title: 'Desentupidora 24h {local} | LitoralTec | (13) 99801-7752',
    descricao:
      'Desentupidora 24h {local}: esgoto, vaso, pia, ralo e coluna. Atendimento emergencial, inclusive feriados. Orçamento grátis. Ligue (13) 99801-7752.',
    subtitulo:
      'Desentupimento de esgoto, vaso sanitário, pia, ralo e coluna. Atendimento emergencial 24 horas por dia, 7 dias por semana, inclusive feriados, com técnicos capacitados e equipamentos modernos.',
    servicoNome: 'Desentupimento de esgoto, vasos, pias, ralos e colunas',
    servicoDescricao:
      'Desentupimento de esgoto, vasos sanitários, pias, ralos e colunas, com atendimento emergencial 24 horas no Litoral de São Paulo.',
    itensTitulo: 'O que desentupimos',
    itens: [
      { nome: 'Vasos Sanitários', imagem: '/assets/Gerais/vasosSanitarios.png', categoria: 'Desentupimentos Gerais', cor: 'preto' },
      { nome: 'Pias', imagem: '/assets/Gerais/pias.png', categoria: 'Desentupimentos Gerais', cor: 'preto' },
      { nome: 'Esgotos', imagem: '/assets/Gerais/esgotos.png', categoria: 'Desentupimentos Gerais', cor: 'preto' },
      { nome: 'Ralos', imagem: '/assets/Gerais/ralos.png', categoria: 'Desentupimentos Gerais', cor: 'preto' },
      { nome: 'Colunas', imagem: '/assets/Gerais/colunas.png', categoria: 'Desentupimentos Gerais', cor: 'preto' },
      { nome: 'Hidrojateamento', imagem: '/assets/Limpeza/hidrojateamento.png', categoria: 'Limpezas Gerais', cor: 'azul' },
    ],
    passos: [
      { t: 'Chame no WhatsApp ou ligue', d: 'Atendemos 24 horas. Conte qual é o problema e o endereço.' },
      { t: 'Receba o orçamento', d: 'Avaliamos o caso e passamos o valor, grátis e sem compromisso.' },
      { t: 'Problema resolvido', d: 'Nossa equipe executa o serviço com equipamentos modernos e garantia.' },
    ],
    faq: [
      {
        p: 'Vocês atendem emergências de desentupimento à noite?',
        r: 'Sim, nosso serviço de desentupimento funciona 24 horas por dia, 7 dias por semana, incluindo feriados. Atendimento emergencial para toda a Baixada Santista.',
      },
      {
        p: 'Quais tipos de desentupimento a LitoralTec faz?',
        r: 'Desentupimos esgotos, vasos sanitários, pias, ralos e colunas, em residências, condomínios e comércios. Também oferecemos hidrojateamento.',
      },
      {
        p: 'O que fazer enquanto o desentupidor não chega?',
        r: 'Feche o registro da água para evitar refluxo e evite usar vasos e pias do mesmo ramal. Não use produtos químicos agressivos em canos de PVC e não tente desmontar os canos sem conhecimento técnico.',
      },
      FAQ_ORCAMENTO,
      FAQ_CIDADES,
    ],
    whats: 'Olá! Preciso de desentupimento {local} e gostaria de um orçamento urgente.',
    artigos: ['desentupimento-esgoto-emergencia'],
  },

  dedetizacao: {
    path: '/dedetizacao',
    nomeCurto: 'Dedetização',
    badge: 'Certificada pelo CRQ-IV',
    h1: 'Dedetização com garantia de 90 dias',
    title: 'Dedetização {local} | Garantia de 90 dias | LitoralTec',
    descricao:
      'Dedetização {local}: residencial e comercial, desratização e descupinização. CRQ-IV, produtos ANVISA e garantia de 90 dias. Orçamento grátis pelo WhatsApp.',
    subtitulo:
      'Dedetização residencial e comercial, desratização, descupinização e controle de pombos. Produtos registrados na ANVISA, empresa certificada pelo CRQ-IV e laudo técnico para vigilância sanitária.',
    servicoNome: 'Dedetização residencial e comercial',
    servicoDescricao:
      'Dedetização, desratização, descupinização e controle de pombos, com garantia de 90 dias e laudo técnico, no Litoral de São Paulo.',
    itensTitulo: 'Pragas que eliminamos',
    itens: [
      { nome: 'Dedetização', imagem: '/assets/Pragas/dedetizacao.png', categoria: 'Controle de Pragas', cor: 'dourado' },
      { nome: 'Desratização', imagem: '/assets/Pragas/desratizacao.png', categoria: 'Controle de Pragas', cor: 'dourado' },
      { nome: 'Descupinização', imagem: '/assets/Pragas/descupinizacao.png', categoria: 'Controle de Pragas', cor: 'dourado' },
      { nome: 'Controle de Pombos', imagem: '/assets/Pragas/controle-pombos.png', categoria: 'Controle de Pragas', cor: 'dourado' },
      { nome: 'Automotiva', imagem: '/assets/Pragas/dedetizacao_A.png', categoria: 'Controle de Pragas', cor: 'dourado' },
    ],
    passos: [
      { t: 'Chame no WhatsApp ou ligue', d: 'Conte qual é o local (casa, apartamento, comércio) e qual praga está incomodando.' },
      { t: 'Receba o orçamento', d: 'Avaliamos o caso e passamos o valor, grátis e sem compromisso.' },
      { t: 'Aplicação com laudo', d: 'Equipe certificada faz a aplicação e emitimos laudo técnico, ART e certificado.' },
    ],
    faq: [
      {
        p: 'Qual o prazo de garantia da dedetização?',
        r: 'Todos os nossos serviços de dedetização têm garantia de 90 dias. Em caso de reincidência, retornamos sem custo adicional.',
      },
      {
        p: 'A dedetização é segura para crianças e animais?',
        r: 'Avise a equipe se há crianças ou animais no local. O preparo e o tempo para voltar ao ambiente dependem do produto e do tipo de aplicação.',
      },
      {
        p: 'Vocês emitem laudo para a vigilância sanitária?',
        r: 'Sim! Emitimos laudo técnico, ART e certificado de dedetização válidos para vigilância sanitária e alvarás. Empresa regularizada no CRQ-IV.',
      },
      {
        p: 'Com que frequência devo dedetizar?',
        r: 'A frequência depende do tipo de imóvel, da praga e do histórico de recorrência. A equipe pode orientar um plano de controle adequado ao local.',
      },
      FAQ_ORCAMENTO,
      FAQ_CIDADES,
    ],
    whats: 'Olá! Preciso de dedetização {local} e gostaria de um orçamento.',
    artigos: ['quando-fazer-dedetizacao', 'dedetizacao-segura-criancas-pets', 'cupins-como-identificar'],
  },

  'limpeza-caixa-dagua-fossa': {
    path: '/limpeza-caixa-dagua-fossa',
    nomeCurto: "Caixa d'Água e Fossa",
    badge: 'Laudo técnico incluso',
    h1: "Limpeza de Caixa d'Água e Fossa Séptica",
    title: "Limpeza de Caixa d'Água e Fossa Séptica {local} | LitoralTec",
    descricao:
      "Limpeza de caixa d'água e fossa séptica {local}, com laudo técnico. Equipe treinada e atendimento 24h. Peça orçamento grátis pelo WhatsApp.",
    subtitulo:
      "Esvaziamento, escovação, desinfecção e laudo técnico para caixas d'água. Limpeza de fossa séptica com equipamentos adequados e equipe treinada, para evitar entupimentos, transbordamentos e mau cheiro.",
    servicoNome: "Limpeza de caixa d'água e fossa séptica",
    servicoDescricao:
      "Limpeza e desinfecção de caixas d'água com laudo técnico e limpeza de fossa séptica no Litoral de São Paulo.",
    itensTitulo: 'Serviços de limpeza',
    itens: [
      { nome: "Caixas d'Água", imagem: '/assets/Limpeza/caixasdagua.png', categoria: 'Limpezas Gerais', cor: 'azul' },
      { nome: 'Fossa Séptica', imagem: '/assets/Limpeza/fossaseptica.png', categoria: 'Limpezas Gerais', cor: 'azul' },
      { nome: 'Hidrojateamento', imagem: '/assets/Limpeza/hidrojateamento.png', categoria: 'Limpezas Gerais', cor: 'azul' },
    ],
    passos: [
      { t: 'Chame no WhatsApp ou ligue', d: "Informe o tipo de imóvel e se é caixa d'água, fossa ou os dois." },
      { t: 'Receba o orçamento', d: 'Avaliamos o caso e passamos o valor, grátis e sem compromisso.' },
      { t: 'Serviço com laudo', d: 'Nossa equipe executa a limpeza e emite o laudo técnico.' },
    ],
    faq: [
      {
        p: "Como funciona a limpeza de caixa d'água?",
        r: 'Nossa equipe realiza esvaziamento, escovação, desinfecção e emissão de laudo técnico.',
      },
      {
        p: "Com que frequência devo limpar a caixa d'água?",
        r: 'Recomendamos a limpeza a cada 6 meses para garantir a qualidade da água e a sua segurança.',
      },
      {
        p: 'Por que fazer a limpeza da fossa séptica?',
        r: 'A manutenção correta da fossa séptica evita entupimentos, transbordamentos e mau cheiro.',
      },
      FAQ_ORCAMENTO,
      FAQ_CIDADES,
    ],
    whats: "Olá! Preciso de limpeza de caixa d'água ou fossa séptica {local} e gostaria de um orçamento.",
    artigos: [],
  },
};
