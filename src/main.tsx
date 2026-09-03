import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Starting React app...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    rootElement.innerHTML = '<div style="padding: 20px; color: white; font-family: sans-serif;">Error loading app. Check console for details.</div>';
  }
}
