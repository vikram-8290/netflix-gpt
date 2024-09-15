import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAezf5_BfbyCnKL6RtI_7TV0u7c9tNmXt8",
  authDomain: "netflixgpt-c8294.firebaseapp.com",
  projectId: "netflixgpt-c8294",
  storageBucket: "netflixgpt-c8294.appspot.com",
  messagingSenderId: "783840739702",
  appId: "1:783840739702:web:847af53ac54783f9d0fa57",
  measurementId: "G-86P5X2NQ3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // Correctly initialize and export `auth`
