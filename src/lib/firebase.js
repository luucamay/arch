import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSQmv2EVd5RbMCFpq9G6AM7X2BuSrtooM",
  authDomain: "arquitectura-vanillaja-redux.firebaseapp.com",
  databaseURL: "https://arquitectura-vanillaja-redux.firebaseio.com",
  projectId: "arquitectura-vanillaja-redux",
  storageBucket: "arquitectura-vanillaja-redux.appspot.com",
  messagingSenderId: "861503253443",
  appId: "1:861503253443:web:63faa56f3114622296eb76"
};

firebase.initializeApp(firebaseConfig);

export const withFirebase =
  Component =>
    props => Component({ ...props, firebase });