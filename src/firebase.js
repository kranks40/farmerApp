import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDv4O_c2m2HRukhQ7hAMkD0z11WNXhvRY",
    authDomain: "farmingapp-739c7.firebaseapp.com",
    databaseURL: "https://farmingapp-739c7.firebaseio.com",
    projectId: "farmingapp-739c7",
    storageBucket: "farmingapp-739c7.appspot.com",
    messagingSenderId: "1013167605528",
    appId: "1:1013167605528:web:fb879db51f31941183006d",
    measurementId: "G-5GVN6QVKG6",
});

const auth = firebase.auth();

export { auth };
