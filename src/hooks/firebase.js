import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD6L83lig1b3It-IDW1RQaT3o567ZrdTcM",
    authDomain: "in-87793.firebaseapp.com",
    databaseURL: "https://in-87793-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "in-87793",
    storageBucket: "in-87793.appspot.com",
    messagingSenderId: "95167789224",
    appId: "1:95167789224:web:96594049a8589e7de9ea9d",
    measurementId: "G-YFSD153ZWS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
