import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWbfGzh1k5BR0b_wfNNH6ZKCmUrL7d_RU",
  authDomain: "coder-732c9.firebaseapp.com",
  projectId: "coder-732c9",
  storageBucket: "coder-732c9.appspot.com",
  messagingSenderId: "392726704096",
  appId: "1:392726704096:web:c6ae86555dda9b7aaec585"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
