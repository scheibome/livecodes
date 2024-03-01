/* eslint-disable import/no-internal-modules */
export { initializeApp, getApp } from 'firebase/app';
export type { User as FirebaseUser } from 'firebase/auth';
export { getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyC9JqfYZI1vsBR3WeOw5J39p5d5f2yh-Uk',
  authDomain: 'codescheibitzcom.firebaseapp.com',
  projectId: 'codescheibitzcom',
  storageBucket: 'codescheibitzcom.appspot.com',
  messagingSenderId: '27872266784',
  appId: '1:27872266784:web:3fb859f7318558b54a4a45',
  measurementId: '',
};
