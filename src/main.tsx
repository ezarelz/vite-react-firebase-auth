import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Optional: Daftarkan service worker hanya jika file-nya tersedia
if ('serviceWorker' in navigator) {
  fetch('/firebase-messaging-sw.js').then((res) => {
    if (res.status === 200) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope
          );
        })
        .catch((err) => {
          console.log('Service Worker registration failed:', err);
        });
    } else {
      console.warn(
        'firebase-messaging-sw.js not found, skipping registration.'
      );
    }
  });
}

// React 18+ API
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
