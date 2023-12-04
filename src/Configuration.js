import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBfmjbTCeuWtjD3LfaddLbIP5X0WiR3kTU',

  authDomain: 'industrial-world-hub.firebaseapp.com',

  databaseURL: 'https://industrial-world-hub-default-rtdb.firebaseio.com',

  projectId: 'industrial-world-hub',

  storageBucket: 'industrial-world-hub.appspot.com',

  messagingSenderId: '1071227220052',

  appId: '1:1071227220052:web:0841522468f0a020893dc1',

  measurementId: 'G-D8M662E0MC',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
