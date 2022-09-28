// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAYV2EGcuwyYQqLZ_XrbnPxFZ4-MkP66Qg',
  authDomain: 'netflix-clone-jdy.firebaseapp.com',
  projectId: 'netflix-clone-jdy',
  storageBucket: 'netflix-clone-jdy.appspot.com',
  messagingSenderId: '421223353042',
  appId: '1:421223353042:web:793e56705f302935dc3b0b',
  measurementId: 'G-FB7PPTNNFE',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
