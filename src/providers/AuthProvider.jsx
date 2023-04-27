import React from 'react';
import { createContext } from 'react';
export const AuthContext= createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [Loading,setLoading]=useState(true);
    
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    //observer user auth state

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        

        //stop observer while unmounting
        return ()=>unsubscribe();
    },[])
   
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        Loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;