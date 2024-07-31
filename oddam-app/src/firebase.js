// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf5OWSd8CAODz33E4UY7zJl8EcpefOec8",
    authDomain: "oddam-app.firebaseapp.com",
    projectId: "oddam-app",
    storageBucket: "oddam-app.appspot.com",
    messagingSenderId: "869865481021",
    appId: "1:869865481021:web:fb8a7ac37556d7b36b1b54",
    measurementId: "G-L4THSR18MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);
export default app;