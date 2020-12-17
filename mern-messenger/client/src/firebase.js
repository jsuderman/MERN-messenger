import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZ0YAg2vrE3u97YoxYFibgWq_PvNCZ4tg",
    authDomain: "messenger-app-1c5f2.firebaseapp.com",
    projectId: "messenger-app-1c5f2",
    storageBucket: "messenger-app-1c5f2.appspot.com",
    messagingSenderId: "876520428080",
    appId: "1:876520428080:web:c32c7013916728e49953f5"
})
    const db = firebaseApp.firestore()

export default db
  