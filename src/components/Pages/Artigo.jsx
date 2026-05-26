import React from "react";
import { useParams } from "react-router-dom";
import artigos from "../Data/artigo";
import "../../styles/Blog.css";


function Artigo() {
  const { id } = useParams();
  const artigo = artigos.find((a) => a.id === id);

  if (!artigo) return <p>Artigo não encontrado</p>;

  return (
    <div className="artigo-pagina">
      <img src={artigo.imagem} alt={artigo.titulo} />
      <h1>{artigo.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
    </div>
  );
}

export default Artigo;
