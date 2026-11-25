export default function FaqItem({ pergunta, resposta }) {
  return (
    <details className="faq-item">
      <summary className="faq-pergunta">
        {pergunta}
        <span className="faq-seta" aria-hidden="true" />
      </summary>
      <div className="faq-resposta">
        <p>{resposta}</p>
      </div>
    </details>
  );
}
