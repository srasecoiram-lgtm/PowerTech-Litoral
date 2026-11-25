import { useEffect, useRef, useState } from 'react';
import { CIDADES, landings } from './landingData';
import { TELEFONE_HREF, TELEFONE_TEXTO, whatsappUrl, reportContactConversion } from '../utils/contato';

export function WhatsApp({ children, className = 'btn-hero-primary', message, placement = 'hero', icon = true }) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={className}
      onClick={() => reportContactConversion('whatsapp', placement)}>
      {icon && <img src="/assets/icons/whatsapp-logo.png" alt="" width="22" height="22" />}
      {children}
    </a>
  );
}

export function Telefone({ children = TELEFONE_TEXTO, className = 'btn-hero-secondary', placement = 'hero' }) {
  return (
    <a href={TELEFONE_HREF} className={className} onClick={() => reportContactConversion('phone', placement)}>
      {children}
    </a>
  );
}

const imoveis = ['Casa', 'Apartamento', 'Condomínio', 'Comércio ou empresa', 'Outro'];

export function Orcamento({ servico = '', cidade = '' }) {
  const [pedido, setPedido] = useState('');
  const [pronto, setPronto] = useState(false);
  const resumo = useRef(null);

  useEffect(() => setPronto(true), []);
  useEffect(() => {
    if (pedido) resumo.current?.focus();
  }, [pedido]);

  function preparar(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const grupo = Object.values(landings).find((item) => item.path === fields.get('servico'));
    const local = CIDADES.find((item) => item.slug === fields.get('cidade'))?.nome;
    const imovel = fields.get('imovel');
    if (!grupo || !local || !imoveis.includes(imovel)) return;
    const detalhes = String(fields.get('detalhes') || '').trim().slice(0, 300);
    const mensagem = [
      'Olá! Gostaria de um orçamento da LitoralTec.',
      `Serviço: ${grupo.nomeCurto}`,
      `Cidade: ${local}`,
      `Imóvel: ${imovel}`,
      detalhes && `Detalhes: ${detalhes}`,
    ].filter(Boolean).join('\n');
    setPedido(mensagem);
  }

  return (
    <section id="orcamento" className="quote-section" aria-labelledby="quote-heading">
      <div className="container quote-inner">
        <div className="quote-intro">
          <p className="eyebrow"><span /> Atendimento 24 horas</p>
          <h2 id="quote-heading">Peça seu orçamento.</h2>
          <p>Informe o serviço, a cidade e o tipo de imóvel. Você vai revisar o pedido antes de abrir o WhatsApp.</p>
          <p className="quote-phone">Prefere ligar? <Telefone className="quote-phone-link" placement="quote_phone" /></p>
        </div>
        <form className="quote-form" method="post" onSubmit={preparar} onChange={() => setPedido('')}>
          <fieldset className="quote-fields" disabled={!pronto}>
            <label>Serviço
              <select name="servico" defaultValue={servico} required>
                <option value="" disabled>Selecione o serviço</option>
                {Object.values(landings).map((item) => <option key={item.path} value={item.path}>{item.nomeCurto}</option>)}
              </select>
            </label>
            <label>Cidade
              <select name="cidade" defaultValue={cidade} required>
                <option value="" disabled>Selecione a cidade</option>
                {CIDADES.map((item) => <option key={item.slug} value={item.slug}>{item.nome}</option>)}
              </select>
            </label>
            <label>Tipo de imóvel
              <select name="imovel" defaultValue="" required>
                <option value="" disabled>Selecione o tipo</option>
                {imoveis.map((imovel) => <option key={imovel}>{imovel}</option>)}
              </select>
            </label>
            <label>Detalhes <span>(opcional)</span>
              <input name="detalhes" maxLength={300} placeholder="Ex.: retorno de água pelo ralo" />
            </label>
          </fieldset>
          {pedido ? (
            <div className="quote-confirmation">
              <p className="quote-message" tabIndex={-1} ref={resumo}>{pedido}</p>
              <WhatsApp message={pedido} placement="quote_whatsapp">Abrir pedido no WhatsApp</WhatsApp>
            </div>
          ) : <button className="btn-hero-primary" type="submit" disabled={!pronto}>Revisar pedido</button>}
        </form>
      </div>
    </section>
  );
}
