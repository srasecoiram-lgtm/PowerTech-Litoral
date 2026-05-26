# 🐛 Powertec Litoral — Site Oficial
### Dedetização e Desentupidora no Litoral de São Paulo

> Site profissional desenvolvido com foco em SEO local, conversão via WhatsApp e Google ADS para a empresa **Powertec Litoral**, especializada em dedetização, desratização, descupinização e desentupimento na Baixada Santista.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19.1 | Interface e componentes |
| Vite | 6.3 | Build e servidor de desenvolvimento |
| React Router DOM | 6.30 | Navegação entre páginas |
| Barlow / Barlow Condensed | Google Fonts | Tipografia |
| Schema.org | — | Dados estruturados para SEO |
| Google ADS Tag | AW-16702896364 | Rastreamento de conversões |

---

## 📁 Estrutura de Pastas

```
PowerTec/
├── public/
│   └── assets/
│       ├── Gerais/          # Imagens desentupimentos
│       ├── Pragas/          # Imagens controle de pragas
│       ├── Limpeza/         # Imagens limpezas gerais
│       ├── Clientes/        # Logos dos clientes
│       ├── Sobre/           # Ícones dos diferenciais
│       ├── icons/           # WhatsApp, Instagram, Facebook
│       ├── Videos/          # Vídeos dos serviços
│       ├── Logo.png
│       ├── CRQ-IV.png
│       ├── Power_Tec_Funcionario.png
│       └── Power_Tec_Funcionario_2.png
│
├── src/
│   ├── assets/              # Assets internos do React
│   ├── components/
│   │   ├── Data/
│   │   │   └── artigo.js    # Dados dos artigos do blog
│   │   └── Pages/
│   │       ├── Artigo.jsx
│   │       ├── BlogSection.jsx
│   │       ├── Empresa.jsx
│   │       ├── ServicoCard.jsx
│   │       └── VideoCard.jsx
│   ├── styles/
│   │   ├── App.css          # CSS principal (unificado)
│   │   ├── Blog.css
│   │   ├── Empresa.css
│   │   └── VideoCard.css
│   ├── App.jsx              # Componente raiz + rotas
│   └── main.jsx             # Entry point
│
├── index.html               # HTML com SEO completo
├── vite.config.js
├── package.json
└── .gitignore
```

---

## ⚡ Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/powertec.git
cd powertec

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

### Build para produção

```bash
npm run build
```

A pasta `dist/` será gerada com todos os arquivos prontos para publicar.

---

## 📄 Páginas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `HomePage` | Página principal com todos os serviços |
| `/empresa` | `Empresa` | Sobre a empresa |
| `/blog` | `BlogSection` | Artigos sobre dedetização e desentupimento |

---

## 🔍 SEO Implementado

### Meta Tags
- `title` otimizado com palavras-chave + telefone
- `meta description` com serviços + cidades + CTA
- `meta keywords` com 17 variações de busca
- `canonical` URL configurada
- `robots` permitindo indexação completa

### SEO Local
- `geo.region`, `geo.placename` e coordenadas de Praia Grande
- 8 cidades atendidas listadas no Schema

### Schema.org (Dados Estruturados)
- ✅ `LocalBusiness` — nome, telefone, endereço, horário 24h, área de serviço
- ✅ `OfferCatalog` — 11 serviços listados individualmente
- ✅ `AggregateRating` — 5 estrelas, 500 avaliações
- ✅ `FAQPage` — 4 perguntas e respostas (aparecem como rich snippet no Google)
- ✅ `BreadcrumbList` — navegação estruturada
- ✅ `Review` — markup nas avaliações dos clientes
- ✅ `Article` — markup nos posts do blog

### Arquivos de Indexação
- `sitemap.xml` — todas as rotas com prioridades
- `robots.txt` — permite todos os crawlers

### Open Graph
- Compartilhamento otimizado para Facebook e WhatsApp
- Twitter Card configurado

---

## 📦 Funcionalidades

- ✅ Header fixo com badge 24h animado
- ✅ Hero section com CTA para WhatsApp
- ✅ Barra de urgência com marquee
- ✅ Filtro de serviços por categoria
- ✅ Cards de serviço com link direto para WhatsApp com mensagem personalizada
- ✅ Seção de diferenciais com hover interativo
- ✅ Avaliações de clientes com Schema markup
- ✅ Grid de cidades atendidas
- ✅ Seção de clientes e certificação CRQ-IV
- ✅ Player de vídeos dos serviços
- ✅ FAQ interativo com animação
- ✅ Blog com artigos completos e CTA
- ✅ Footer com links SEO (serviços + cidades)
- ✅ Botão flutuante de WhatsApp com animação ripple
- ✅ ScrollToTop automático ao trocar de página
- ✅ Totalmente responsivo (mobile, tablet, desktop)

---

## 📊 Google ADS

Tag instalada no `index.html`:

```
ID: AW-16702896364
Domínio: www.desentupidoralitoralpw.com.br
```

A tag rastreia conversões automaticamente após o site estar publicado no domínio configurado.

### Palavras-chave recomendadas para campanha
- dedetização santos
- desentupidora praia grande
- dedetização 24 horas litoral sp
- desentupimento esgoto santos
- desratização baixada santista

---

## 🌐 Deploy

### Vercel (recomendado — gratuito)

```bash
npm install -g vercel
npm run build
vercel
```

Após o deploy, configurar o domínio em:
**Vercel → Settings → Domains → `desentupidoralitoralpw.com.br`**

### Hospedagem tradicional (cPanel)

```bash
npm run build
# Compactar a pasta dist/ em .zip
# Fazer upload em public_html via cPanel
# Extrair o .zip
```

---

## 📋 Próximos Passos Recomendados

- [ ] Cadastrar no **Google Business Profile** — business.google.com
- [ ] Enviar sitemap no **Google Search Console** — search.google.com/search-console
- [ ] Criar campanha no **Google ADS** com orçamento de R$20+/dia
- [ ] Pedir avaliações no Google para clientes atendidos
- [ ] Publicar 1 artigo no blog por mês
- [ ] Criar páginas dedicadas por cidade (`/dedetizacao-santos`, `/dedetizacao-praia-grande`)
- [ ] Criar imagem OG (`/assets/og-image.jpg`) 1200x630px para compartilhamentos

---

## 📞 Contato da Empresa

**Powertec Litoral**
- 📱 WhatsApp: [(13) 99801-7752](https://wa.me/5513998017752)
- 📧 contato@desentupidoralitoralpw.com.br
- 📸 [@powertec.litoral](https://www.instagram.com/powertec.litoral/)
- 🏅 Certificada pelo CRQ-IV

---

*Desenvolvido com 💛 para o Litoral de SP — 2025*