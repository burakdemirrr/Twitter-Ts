import { initializeApp } from "firebase/app";


import {Auth, getAuth} from "firebase/auth";

import {collection, Firestore, getFirestore} from "firebase/firestore"

import { GoogleAuthProvider } from "firebase/auth";


import {FirebaseStorage, getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUJY_A6uxuK6ma-7AtIYD6I6uIgkviorE",
  authDomain: "twitter-ts-abe4b.firebaseapp.com",
  projectId: "twitter-ts-abe4b",
  storageBucket: "twitter-ts-abe4b.appspot.com",
  messagingSenderId: "481115138978",
  appId: "1:481115138978:web:15ce104836ff594f6360fb"
};
export const app = initializeApp(firebaseConfig);

const db:Firestore=getFirestore();
const auth:Auth=getAuth(app);
const provider = new GoogleAuthProvider();


export const storage:FirebaseStorage=getStorage();

export  {auth,db};