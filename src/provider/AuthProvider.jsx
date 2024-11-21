import { createContext, useEffect, useState } from "react";
import app from "../firebase/firbase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user, loading);

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };

    const autInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return() => {
            unsubscribe()
        }
    })
    return (
       <AuthContext.Provider value={autInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;