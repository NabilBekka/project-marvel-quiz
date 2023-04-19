import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCESzBQn-KZ6xlXvSrOMpJk6qEdExkBnJk",
    authDomain: "my-marvel-quiz-bb283.firebaseapp.com",
    projectId: "my-marvel-quiz-bb283",
    storageBucket: "my-marvel-quiz-bb283.appspot.com",
    messagingSenderId: "1022728838579",
    appId: "1:1022728838579:web:dd966664e79250ef58bfc6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 export const firestore = getFirestore(app);
 export const user  = uid => doc(firestore, `users/${uid}`);