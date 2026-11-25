export default function ServicoCard({ nome, imagem, categoria, cor }) {
  return (
    <div className={`servico-card ${cor}`}>
      <img
        src={imagem}
        alt=""
        loading="lazy"
        width="72"
        height="72"
      />
      <h3>{nome}</h3>
      <span className="categoria-tag">{categoria}</span>
    </div>
  );
}
