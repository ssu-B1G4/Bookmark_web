import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';
import './index.css';
import './styles/fonts.css';
import { initSentry } from './utils/initSenrty';

initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
