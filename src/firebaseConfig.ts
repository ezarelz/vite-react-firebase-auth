// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Konfigurasi Firebase Project
Folder // src/firebaseConfig.ts

// Konfigurasi Firebase Project
const firebaseConfig = {
apiKey: 'YOUR_API_KEY',
authDomain: 'your-app.firebaseapp.com',
projectId: 'your-app',
storageBucket: 'your-app.appspot.com',
messagingSenderId: 'YOUR_MESSAGING_ID',
appId: 'YOUR_APP_ID',
measurementId: 'YOUR_MEASUREMENT_ID',
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
