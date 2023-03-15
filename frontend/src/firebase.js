// import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
// import { useState, useEffect, useContext, createContext } from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyC5htpn5_URRhSM2WHrLPq9_YmW85Dp9G8",
    authDomain: "tunify-e1b24.firebaseapp.com",
    projectId: "tunify-e1b24",
    storageBucket: "tunify-e1b24.appspot.com",
    messagingSenderId: "1080097040277",
    appId: "1:1080097040277:web:c0e57dff8ed188ba5df89c",
    measurementId: "G-LWW29BKX6B"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
