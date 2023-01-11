import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBU6hok26ZC6WU3bRsLfyn26PxEHX1X6q8',
    authDomain: 'e-commerce-batista-93d9d.firebaseapp.com',
    projectId: 'e-commerce-batista-93d9d',
    storageBucket: 'e-commerce-batista-93d9d.appspot.com',
    messagingSenderId: '615530385855',
    appId: '1:615530385855:web:e35c42ef17a55d544b910a'
}

export const database = getFirestore(initializeApp(firebaseConfig));