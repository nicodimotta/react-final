import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWbfGzh1k5BR0b_wfNNH6ZKCmUrL7d_RU",
  authDomain: "coder-732c9.firebaseapp.com",
  projectId: "coder-732c9",
  storageBucket: "coder-732c9.appspot.com",
  messagingSenderId: "392726704096",
  appId: "1:392726704096:web:c6ae86555dda9b7aaec585"
};

const app = initializeApp(firebaseConfig);

export { app };
