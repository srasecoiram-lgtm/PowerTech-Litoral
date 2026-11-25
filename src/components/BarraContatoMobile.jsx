import { useLocation } from 'react-router-dom';
import { Telefone, WhatsApp } from './Contato';
import { landings } from './landingData';

export default function BarraContatoMobile() {
  const { pathname } = useLocation();
  const servico = Object.values(landings).find(({ path }) => path === pathname);
  const message = servico ? `Olá! Gostaria de um orçamento da LitoralTec para ${servico.nomeCurto.toLowerCase()}.` : undefined;
  return (
    <aside className="barra-contato-mobile" aria-label="Contato rápido, 24 horas">
      <Telefone className="bcm-ligar" placement="mobile_phone">Ligar agora</Telefone>
      <WhatsApp className="bcm-whats" placement="mobile_whatsapp" message={message}>WhatsApp</WhatsApp>
    </aside>
  );
}
