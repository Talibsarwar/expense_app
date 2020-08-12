importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDNL_a1E_2kIi-9Ego_wGn9GiaNFPRYGNs",
    authDomain: "expense-tracker-app-596f8.firebaseapp.com",
    databaseURL: "https://expense-tracker-app-596f8.firebaseio.com",
    projectId: "expense-tracker-app-596f8",
    storageBucket: "expense-tracker-app-596f8.appspot.com",
    messagingSenderId: "57804601906",
    appId: "1:57804601906:web:8774813a164e4618fc1a2b",
    measurementId: "G-BDY5WRNXSW"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();