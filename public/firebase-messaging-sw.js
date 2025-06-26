/* global firebase */
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyDIxgtZZmQSZiALK0hv6xLOnyoW2Yg05Hg',
  authDomain: 'tes-ezar.firebaseapp.com',
  projectId: 'tes-ezar',
  storageBucket: 'tes-ezar.appspot.com',
  messagingSenderId: '592089826792',
  appId: '1:592089826792:web:d19a285d2339d76c51905d',
  measurementId: 'G-FDF2H214H1H',
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
