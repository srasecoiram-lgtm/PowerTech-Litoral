import { useEffect, useState } from 'react';

// Permite não baixar imagens que o CSS esconderia no celular.
export function useMediaQuery(query) {
  const atual = () =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(query).matches
      : false;

  const [ok, setOk] = useState(atual);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const m = window.matchMedia(query);
    const aoMudar = () => setOk(m.matches);
    aoMudar();
    m.addEventListener('change', aoMudar);
    return () => m.removeEventListener('change', aoMudar);
  }, [query]);

  return ok;
}
