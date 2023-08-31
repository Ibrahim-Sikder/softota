import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from '@/firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   
}
const loginWithGoogle = () =>{
    setLoading(true)
    return (auth, googleProvider)
}
const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
    
}

const updateUserProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}
    useEffect(()=>{
       const unsubscribes = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
          
        })
        return ()=>{
            return unsubscribes()
            
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        loginWithGoogle


    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default Auth;