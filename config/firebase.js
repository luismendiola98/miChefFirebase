import firebase from 'firebase';
import ENV from '../env';

const firebaseConfig = {
    apiKey: ENV.apiKey,
    authDomain: ENV.authDomain,
    databaseURL: ENV.databaseURL,
    projectId: ENV.projectId,
    storageBucket: ENV.storageBucket,
    messagingSenderId: ENV.messagingSenderId,
    appId: ENV.appId,
    measurementId: ENV.measurementId
  };

const initialize = firebase.initializeApp(firebaseConfig)

export default initialize;