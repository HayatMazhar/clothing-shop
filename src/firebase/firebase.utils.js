import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAe1CHuq5JaCfaDUnmEHCBlEeBroZMXF-I",
    authDomain: "crwn-2347d.firebaseapp.com",
    projectId: "crwn-2347d",
    storageBucket: "crwn-2347d.appspot.com",
    messagingSenderId: "330376365670",
    appId: "1:330376365670:web:2d85c760690b9136cc4fa7",
    measurementId: "G-6VRDYYSY4M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
