
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCh02CGHOBoPmv7RzLa30BV6D-JiaTmg5E",
    authDomain: "snackfast-6ef93.firebaseapp.com",
    databaseURL: "https://snackfast-6ef93-default-rtdb.firebaseio.com",
    projectId: "snackfast-6ef93",
    storageBucket: "snackfast-6ef93.appspot.com",
    messagingSenderId: "380579335925",
    appId: "1:380579335925:web:3a5113ac94fc192eafffbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db }