import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";





//create context to shere firbase info for all components
export const FirebaseContext = createContext({});
//create google provider object to refference 
const googleProvider = new GoogleAuthProvider();
//create an instace form Github 
const gitHubProvider = new GithubAuthProvider();
const Auth = getAuth(app);
const AuthContex = ({children}) => {
    console.log('redered auth context')
    const [user,setUser] = useState(null);
    console.log(user);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(Auth,email,password);
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth,email,password);
    }

   const loginWithGoogle = () => {
        setLoading(true);
       return signInWithPopup(Auth,googleProvider);
   } 
   const loginWithGitHub = () => {
      setLoading(true);
      return signInWithPopup(Auth,gitHubProvider);
   }
   const resetPassowrd = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(Auth,email)
   }
   const logout = () =>{
        setLoading(true);
        return signOut(Auth);
   }
    const newUser = {
        user,
        createUser,
        loading,
        loginUser,
        loginWithGoogle,
        loginWithGitHub,
        resetPassowrd,
        logout
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth,(userInfo)=>{
            setUser(userInfo);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    return (
        <div>
            <FirebaseContext.Provider value={newUser}>
                {children}
            </FirebaseContext.Provider>
        </div>
    );
};

export default AuthContex;
AuthContex.propTypes = {
    children:PropTypes.node.isRequired
}