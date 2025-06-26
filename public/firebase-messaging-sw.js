/* global firebase */
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'YOUR_FIREBASE_API',
  authDomain: 'YOUR_FIREBASE.firebaseapp.com',
  projectId: 'YOUR_FIREBASE_PROJECT_ID',
  storageBucket: 'YOUR_FIREBASE.appspot.com',
  messagingSenderId: 'YOUR_FIREBASE_SenderId',
  appId: 'YOUR_FIREBASE_appID',
  measurementId: 'YOUR_FIREBASE_measurementId',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message: ',
    payload
  );

  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/firebase-logo.png', // make sure this file exists or change to a valid icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
