import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  AuthErrorCodes,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDngdFT2leotV7_ITn_0GAJXZbQJJxVFtk",
  authDomain: "spotify-api-1b2bb.firebaseapp.com",
  projectId: "spotify-api-1b2bb",
  storageBucket: "spotify-api-1b2bb.firebasestorage.app",
  messagingSenderId: "864467718606",
  appId: "1:864467718606:web:5fd612f98f420397a61b9f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export async function loginEmailPassword(email, password, navigate) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential) {
      navigate("/");
    }
    console.log(userCredential.user);
  } catch (error) {
    if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
      alert("Wrong Email or Password, try again");
    } else {
      alert(error.code);
    }
  }
}

export async function createAccount(email, password, userName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: userName });
    console.log(userCredential.user);
    alert("account created successfully");
  } catch (error) {
    alert(error.code);
  }
}

export async function addPlaylistToFirestore(playlistData) {
  playlistData.items.map(async (item) => {
    try {
      const docRef = await addDoc(collection(db, "playlists"), {
        owner: item.owner.display_name,
        playlistName: item.name,
        playlistImg: item.images[0].url,
        playlistDescription: item.description,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
  alert("Playlist Saved Successfuly");
}

export default function useFetchDocs() {
    const [playlists,setPlaylists] = useState(null);

    useEffect(() => {
      async function getPlaylists() {
        const querySnapshot = await getDocs(collection(db, "playlists"));
        let queryData = querySnapshot.docs.map((doc)=>{
            return (doc.data())
        })
        setPlaylists(queryData);
      }
      getPlaylists();
    }, [])
    
  return (
    playlists
  )
}
