import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import './styles/Blog.css';
import App from './App.jsx';
import { iniciarConsentimento } from './utils/ads';

iniciarConsentimento();

const root = document.getElementById('root');
const app = <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>;
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
