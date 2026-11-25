import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { PageMetadata } from './utils/seo';
import { artigos } from './components/blogData';
import { landings } from './components/landingData';

export const pages = [
  '/', ...Object.values(landings).map(({ path }) => path), '/empresa', '/blog',
  ...artigos.map(({ slug }) => '/blog/' + slug), '/privacidade', '/termos', '/404',
];

export function render(path) {
  let meta;
  const markup = renderToString(
    <PageMetadata.Provider value={(value) => { meta = value; }}>
      <StaticRouter location={path}><App /></StaticRouter>
    </PageMetadata.Provider>,
  );
  if (!meta) throw new Error('Metadados ausentes para ' + path);
  return { markup, meta };
}
