import { createContext, useContext, useEffect } from 'react';

// ================================================
// SEO por página (SPA): título, descrição, canonical,
// robots, Open Graph e dados estruturados (JSON-LD).
// Cada rota chama useDocumentMeta, então nenhuma página
// fica com o canonical da home por engano.
// ================================================

export const SITE_URL = 'https://www.desentupidoraltec.com.br';
export const ROBOTS_INDEX = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
export const ROBOTS_NOINDEX = 'noindex, follow';
export const PageMetadata = createContext(null);

export const urlDe = (path = '/') => `${SITE_URL}${path}`;

const CIDADES_ATENDIDAS = ['Santos', 'Praia Grande', 'São Vicente', 'Guarujá', 'Cubatão', 'Bertioga', 'Itanhaém', 'Peruíbe'];

function definirMeta(atributo, nome, valor) {
  let el = document.head.querySelector(`meta[${atributo}="${nome}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(atributo, nome);
    document.head.appendChild(el);
  }
  el.setAttribute('content', valor);
}

export function useDocumentMeta({ title, description, path = '/', robots = ROBOTS_INDEX, jsonLd = null }) {
  const registrar = useContext(PageMetadata);
  registrar?.({ title, description, path, robots, jsonLd });
  const jsonTexto = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const url = urlDe(path);
    document.title = title;
    definirMeta('name', 'description', description);
    definirMeta('name', 'robots', robots);
    definirMeta('property', 'og:title', title);
    definirMeta('property', 'og:type', path.startsWith('/blog/') ? 'article' : 'website');
    definirMeta('property', 'og:description', description);
    definirMeta('property', 'og:url', url);
    definirMeta('name', 'twitter:title', title);
    definirMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    let script = document.getElementById('jsonld-pagina');
    if (jsonTexto) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'jsonld-pagina';
        document.head.appendChild(script);
      }
      script.textContent = jsonTexto;
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, robots, jsonTexto]);
}

// ---------- Construtores de dados estruturados ----------

export const breadcrumbLd = (itens) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: itens.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.nome,
    item: urlDe(it.path),
  })),
});

export const faqLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.p,
    acceptedAnswer: { '@type': 'Answer', text: f.r },
  })),
});

export const serviceLd = ({ nome, descricao, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: nome,
  serviceType: nome,
  description: descricao,
  url: urlDe(path),
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'LitoralTec - Desentupidora e Dedetização',
    telephone: '+55-13-99801-7752',
  },
  areaServed: CIDADES_ATENDIDAS.map((c) => ({ '@type': 'City', name: c })),
});

export const articleLd = ({ titulo, resumo, data, imagem, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: titulo,
  description: resumo,
  datePublished: data,
  image: `${SITE_URL}${imagem}`,
  mainEntityOfPage: urlDe(path),
  author: { '@type': 'Organization', name: 'LitoralTec' },
  publisher: {
    '@type': 'Organization',
    name: 'LitoralTec',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/Logo_LitoralTec.png` },
  },
});
