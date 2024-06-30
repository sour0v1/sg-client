import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // sign in
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // current sign in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
            return () => {
                return unsubscribe();
            }
        })
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        signInWithEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;