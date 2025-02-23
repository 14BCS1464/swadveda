// // Import Firebase functions
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue, push, set, update, get } from "firebase/database";

// // Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// // Export the database and functions
// export { database, ref, onValue, push, set, update, get };


// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getDatabase } from "firebase/database"; // Realtime Database

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJsILQ8VJHyzBYW7EcFk5vR5ORYcY5Op0",
  authDomain: "swadvedaweb.firebaseapp.com",
  projectId: "swadvedaweb",
  storageBucket: "swadvedaweb.appspot.com",
  messagingSenderId: "1097901437722",
  appId: "1:1097901437722:web:6a4f2b4f90e23a58bf72a3",
  measurementId: "G-B0JSX7E288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database Instance
const db = getFirestore(app);

// Realtime Database Instance
const database = getDatabase(app);

// Export the instances
export { db, database };
