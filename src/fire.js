import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCwNgKnrDRHFLpPpGGnLTtT_FiWDK-52mI",
    authDomain: "task-app-49125.firebaseapp.com",
    projectId: "task-app-49125",
    storageBucket: "task-app-49125.appspot.com",
    messagingSenderId: "1010123851962",
    appId: "1:1010123851962:web:cb0e9af9bca01a0667da83"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
