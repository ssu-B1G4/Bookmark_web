import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';
import { initSentry } from './utils/sentryUtils';

import './index.css';
import './styles/fonts.css';

initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
