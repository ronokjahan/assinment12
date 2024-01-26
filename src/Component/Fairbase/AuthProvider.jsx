
import { createContext } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "./fairbase";

 const auth = getAuth(app);
export const Authcontex=createContext()
const provider = new GoogleAuthProvider();


const Authprovider = ({children}) => {
    const[user,setuser]=useState(null)
    const[loading,setloading]=useState(true)

    const singups=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singouts=()=>{
        setloading(true)
        return signOut(auth)
    }
    const googles=()=>{
        return signInWithPopup(auth,provider)
    }
    const updateProfile=(name,photo)=>{
        return  updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }
    useEffect(()=>{
    const unsbscribe=onAuthStateChanged(auth,currenruser=>{
            setuser(currenruser)
            setloading(false)

        })
        return()=>{
            return unsbscribe()
        }
    },[])
 const authinfo={
    singups,
    singin,
    user,
    loading,
    singouts,
    googles,
    updateProfile
 }
    return (
        <Authcontex.Provider value={authinfo} >
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;