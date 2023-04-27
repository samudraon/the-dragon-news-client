// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVxPOomrqtQ0CTU44g79KDjkJODeRQf2E",
    authDomain: "the-dragon-news-b86dc.firebaseapp.com",
    projectId: "the-dragon-news-b86dc",
    storageBucket: "the-dragon-news-b86dc.appspot.com",
    messagingSenderId: "365412905242",
    appId: "1:365412905242:web:8144fdd8ac78e0c5093ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;