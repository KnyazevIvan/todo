import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCQs4_Fyiily184AJ9TzjePalj9-B-c9c0",
  authDomain: "fir-b7d1f.firebaseapp.com",
  databaseURL: "https://fir-b7d1f.firebaseio.com",
  projectId: "fir-b7d1f",
  storageBucket: "fir-b7d1f.appspot.com",
  messagingSenderId: "634163881876",
  appId: "1:634163881876:web:171e926ddede8890f15181"
};


firebase.initializeApp(firebaseConfig);


export default firebase