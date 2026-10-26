import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA92x_nUz_Zd8I19gQxdTYcg0yYvG7DvbY",
  authDomain: "jasmeet-singh-e5e14.firebaseapp.com",
  projectId: "jasmeet-singh-e5e14",
  storageBucket: "jasmeet-singh-e5e14.firebasestorage.app",
  messagingSenderId: "781452302858",
  appId: "1:781452302858:web:b3755f02d6612c2183ddf3",
  measurementId: "G-T7B8PPBY6Z"
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(app);

export const signinwithGoogle = () =>
  signInWithPopup(auth, provider);

export const signupwithemailandpassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginwithemailandpassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const db = getFirestore(app);

// Existing user-document function
export const createUserDoc = async (userAuth, otherinfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    await setDoc(userDocRef, {
      displayName: userAuth.displayName ?? otherinfo.displayName ?? "",
      email: userAuth.email ?? "",
      ...otherinfo,
    });
  }

  return userDocRef;
};

// Step 1: Upload staff records to Firestore
export async function addcollectionanddocuments(
  collectionkey,
  objectstoadd
) {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectstoadd.forEach((object) => {
    const documentId = String(object.name).toLowerCase();
    const docRef = doc(collectionRef, documentId);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Staff upload successful");
}

// Step 2: Fetch staff records from Firestore
export async function fetchstaffdata() {
  const collectionRef = collection(db, "staff");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((document) => ({
    ...document.data(),
    firestoreId: document.id,
  }));
}
