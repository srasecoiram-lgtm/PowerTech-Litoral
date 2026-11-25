import { medirContato } from './ads';

export const WHATSAPP_NUMERO = '5513998017752';
export const TELEFONE_HREF = 'tel:+5513998017752';
export const TELEFONE_TEXTO = '(13) 99801-7752';
export const EMAIL_CONTATO = 'comerciallitoraltec@gmail.com';

const MENSAGEM_PADRAO = 'Olá! Vim pelo site da LitoralTec e gostaria de um orçamento.';

export function whatsappUrl(texto = MENSAGEM_PADRAO) {
  const params = new URLSearchParams({ text: texto });
  return `https://wa.me/${WHATSAPP_NUMERO}?${params}`;
}

export function reportContactConversion(canal, posicao) {
  medirContato(canal, posicao);
}
