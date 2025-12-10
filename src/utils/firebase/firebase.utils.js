// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB-X4DyrQp7jXGonGFQgjluQooIbtNZ4OQ",

  authDomain: "crwn-clothing-crs-db.firebaseapp.com",

  projectId: "crwn-clothing-crs-db",

  storageBucket: "crwn-clothing-crs-db.firebasestorage.app",

  messagingSenderId: "1017437521574",

  appId: "1:1017437521574:web:0e053d22953d90002fd667",

  measurementId: "G-FT2LBC7N0D",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const crateUserDocumnetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("user", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  const isUserExist = userSnapshot.exists();
  if (isUserExist) return "User already exists";
  const { displayName, email } = userAuth;
  const craetedAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      craetedAt,
    });
  } catch (err) {
    console.log("Error", err.message);
  }
  return userDocRef;
};
