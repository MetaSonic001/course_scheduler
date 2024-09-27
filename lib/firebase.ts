// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv2DCsplRSN_NCF2x3zpBRIttNvlRwCfo",
  authDomain: "course-scheduler-c8678.firebaseapp.com",
  projectId: "course-scheduler-c8678",
  storageBucket: "course-scheduler-c8678.appspot.com",
  messagingSenderId: "275997196098",
  appId: "1:275997196098:web:2df562de7c0082f5ac52db",
  measurementId: "G-RDTHWVV8GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export auth, db, and googleProvider
export { auth, db, googleProvider };

// Utility functions to interact with Firestore
export const getCourses = async () => {
  const coursesCollection = collection(db, "courses");
  const courseSnapshot = await getDocs(coursesCollection);
  return courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRooms = async () => {
  const roomsCollection = collection(db, "rooms");
  const roomSnapshot = await getDocs(roomsCollection);
  return roomSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Authentication utilities
export const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const logOut = () => signOut(auth);