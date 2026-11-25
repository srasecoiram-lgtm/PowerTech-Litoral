import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { escolherConsentimento, lerConsentimento } from '../utils/ads';

export default function AvisoCookies({ preferencias, onClose }) {
  const [visivel, setVisivel] = useState(false);
  const banner = useRef(null);

  useEffect(() => setVisivel(lerConsentimento() === null), []);
  useEffect(() => {
    if (preferencias) banner.current?.focus();
  }, [preferencias]);

  function escolher(escolha) {
    escolherConsentimento(escolha);
    setVisivel(false);
    onClose();
  }

  if (!visivel && !preferencias) return null;

  return (
    <section className="aviso-cookies" tabIndex={-1} ref={banner} aria-label="Preferências de cookies">
      <p>Com sua permissão, usamos o Google Ads para medir cliques de contato. Saiba mais na{' '}
        <Link to="/privacidade" onClick={() => { setVisivel(false); onClose(); }}>política de privacidade</Link>.
      </p>
      <div className="aviso-cookies-botoes">
        <button type="button" onClick={() => escolher('denied')}>Recusar</button>
        <button type="button" onClick={() => escolher('granted')}>Aceitar</button>
      </div>
    </section>
  );
}
