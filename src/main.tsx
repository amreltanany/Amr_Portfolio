import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function SmoothScrollApp() {
  useSmoothScroll();
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrollApp />
  </StrictMode>
);
