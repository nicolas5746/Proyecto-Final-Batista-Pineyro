import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'middlewares/firebase/firebaseConfig';
import Router from 'screens/Router';
import 'tailwindcss/tailwind.css';
import 'assets/styles/styles.sass';

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);