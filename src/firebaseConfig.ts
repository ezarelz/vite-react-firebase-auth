// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Konfigurasi Firebase Project
export const firebaseConfig = {
  apiKey: 'AIzaSyDIxgtZZm0SZiALK0hv6xLOnyoW2Yg05Hg',
  authDomain: 'tes-ezar.firebaseapp.com',
  projectId: 'tes-ezar',
  storageBucket: 'tes-ezar.appspot.com', // ✅ Diperbaiki
  messagingSenderId: '592089826792',
  appId: '1:592089826792:web:d19a285d2339d76c51905d',
  measurementId: 'G-FDF2H214H1',
};

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);

// Optional: Inisialisasi Analytics jika didukung
let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Ekspor default & optional analytics
export default app;
export { analytics };
