import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCi-oSZepWoAVFDB8R-mhpAePoWSk1VkG8",
    authDomain: "cart-81723.firebaseapp.com",
    projectId: "cart-81723",
    storageBucket: "cart-81723.appspot.com",
    messagingSenderId: "297474732628",
    appId: "1:297474732628:web:932d7c2f5a50bcfdcd73c1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();