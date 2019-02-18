import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUKMw6ZwrwB5OyuTUMelcoX44MFyqFCzc",
    authDomain: "rsv-jobs.firebaseapp.com",
    databaseURL: "https://rsv-jobs.firebaseio.com",
    projectId: "rsv-jobs",
    storageBucket: "rsv-jobs.appspot.com",
    messagingSenderId: "565423437672"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;