import React from "react";

export default function ServicoCard({ nome, imagem, categoria, cor }) {
  return (
    <div className={`servico-card ${cor}`} role="article" aria-label={`${nome} - ${categoria}`}>
      <img
        src={imagem}
        alt={`${nome} - serviço de ${categoria} no Litoral de SP`}
        loading="lazy"
        width="72"
        height="72"
      />
      <h3>{nome}</h3>
      <span className="categoria-tag">{categoria}</span>
    </div>
  );
}
