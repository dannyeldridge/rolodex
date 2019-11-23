import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVolJHkLjo7xO1TBA5R-5aYYSiASbAdMI",
    authDomain: "rolodex-new.firebaseapp.com",
    databaseURL: "https://rolodex-new.firebaseio.com",
    projectId: "rolodex-new",
    storageBucket: "rolodex-new.appspot.com",
    messagingSenderId: "268781246032",
    appId: "1:268781246032:web:8614b91e68df8190aea355"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  export default app;