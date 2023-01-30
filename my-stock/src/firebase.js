// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBmT5Ll-z03cLFoODBGwNrSdlfFBcINcQs",

  authDomain: "todo-app-yt-c3d23.firebaseapp.com",

  projectId: "todo-app-yt-c3d23",

  storageBucket: "todo-app-yt-c3d23.appspot.com",

  messagingSenderId: "57374882596",

  appId: "1:57374882596:web:4ec8237d28a3fa8e8311b1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app)