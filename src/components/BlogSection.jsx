import { Link, useParams } from "react-router-dom";
import { Telefone, WhatsApp } from "./Contato";
import { useDocumentMeta, breadcrumbLd, articleLd } from "../utils/seo";
import { artigos } from "./blogData";

const formatarData = (iso, mes) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: mes, year: "numeric", timeZone: "UTC" });

// Texto simples com **negrito**, sem dangerouslySetInnerHTML.
function Texto({ children }) {
  const partes = children.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {partes.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}
    </>
  );
}

// Converte o texto do artigo em parágrafos e listas (- item / 1. item).
function Conteudo({ texto }) {
  const nos = [];
  texto.split("\n\n").forEach((bloco, bi) => {
    let atual = null;
    const fechar = () => {
      if (!atual) return;
      const Tag = atual.tipo;
      nos.push(
        <Tag key={`${bi}-${nos.length}`}>
          {atual.itens.map((item, i) => (
            <li key={i}><Texto>{item}</Texto></li>
          ))}
        </Tag>
      );
      atual = null;
    };
    bloco.split("\n").forEach((linha) => {
      const ul = linha.match(/^- (.*)/);
      const ol = linha.match(/^\d+\. (.*)/);
      if (ul || ol) {
        const tipo = ul ? "ul" : "ol";
        if (atual && atual.tipo !== tipo) fechar();
        if (!atual) atual = { tipo, itens: [] };
        atual.itens.push((ul || ol)[1]);
      } else {
        fechar();
        nos.push(
          <p key={`${bi}-${nos.length}`}><Texto>{linha}</Texto></p>
        );
      }
    });
    fechar();
  });
  return <>{nos}</>;
}

function ArtigoCompleto({ artigo }) {
  const path = `/blog/${artigo.slug}`;
  useDocumentMeta({
    title: `${artigo.titulo} | Blog LitoralTec`,
    description: artigo.resumo,
    path,
    jsonLd: [
      articleLd({ ...artigo, path }),
      breadcrumbLd([
        { nome: "Início", path: "/" },
        { nome: "Blog", path: "/blog" },
        { nome: artigo.titulo, path },
      ]),
    ],
  });

  return (
    <article className="blog-artigo-completo">
      <div className="blog-artigo-header">
        <Link to="/blog" className="btn-voltar">← Voltar ao Blog</Link>
        <span className="artigo-categoria">{artigo.categoria}</span>
        <h1>{artigo.titulo}</h1>
        <div className="artigo-meta">
          <time dateTime={artigo.data}>{formatarData(artigo.data, "long")}</time>
          <span>• {artigo.tempo} de leitura</span>
        </div>
      </div>
      <div className="blog-artigo-body">
        <Conteudo texto={artigo.conteudo} />
      </div>
      <div className="blog-cta">
        <h2>Precisa de {artigo.servico} em Santos ou no litoral de SP?</h2>
        <p>A LitoralTec está disponível 24 horas. Entre em contato agora mesmo!</p>
        <div className="blog-cta-botoes">
          <WhatsApp message={`Olá! Li o artigo "${artigo.titulo}" e gostaria de mais informações.`} placement="article">
            Falar com especialista
          </WhatsApp>
          <Telefone placement="article">Ligar agora</Telefone>
        </div>
        <p className="blog-cta-servico">
          Veja também: <Link to={artigo.landing}>página de {artigo.servico}</Link>
        </p>
      </div>
    </article>
  );
}

function ListaBlog() {
  useDocumentMeta({
    title: "Blog sobre Dedetização e Desentupimento | LitoralTec",
    description: "Dicas e informações sobre dedetização, desratização, descupinização e desentupimento para o seu lar e negócio no Litoral de SP.",
    path: "/blog",
    jsonLd: breadcrumbLd([
      { nome: "Início", path: "/" },
      { nome: "Blog", path: "/blog" },
    ]),
  });

  return (
    <section className="blog-secao" aria-labelledby="blog-titulo">
      <div className="container">
        <div className="secao-header">
          <span className="secao-tag">Dicas e Informações</span>
          <h1 id="blog-titulo" className="secao-titulo">Blog sobre Dedetização e Desentupimento</h1>
          <p className="secao-subtitulo">
            Conteúdo educativo sobre controle de pragas, desentupimento e higienização para seu lar e negócio.
          </p>
        </div>
        <div className="blog-grid">
          {artigos.map((a) => (
            <article key={a.slug} className="blog-card">
              <Link to={`/blog/${a.slug}`} className="blog-card-link">
                <div className="blog-card-img">
                  <img src={a.imagem} alt={a.titulo} loading="lazy" decoding="async" />
                  <span className="blog-categoria-badge">{a.categoria}</span>
                </div>
                <div className="blog-card-body">
                  <time dateTime={a.data} className="blog-data">
                    {formatarData(a.data, "short")}
                    <span> • {a.tempo}</span>
                  </time>
                  <h2>{a.titulo}</h2>
                  <p>{a.resumo}</p>
                  <span className="blog-leia-mais">Ler artigo completo →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogSection({ fallback = null }) {
  const { slug } = useParams();
  if (slug) {
    const artigo = artigos.find((a) => a.slug === slug);
    if (!artigo) return fallback;
    return <ArtigoCompleto artigo={artigo} />;
  }
  return <ListaBlog />;
}
