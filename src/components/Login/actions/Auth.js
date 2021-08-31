import { types } from "../types/Types";
import  firebase from "firebase/app";
import   'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfKFX7pT4MbEqB4nyEI8ggR0G_MgTMWDY",
    authDomain: "tutoria-20626.firebaseapp.com",
    projectId: "tutoria-20626",
    storageBucket: "tutoria-20626.appspot.com",
    messagingSenderId: "937165411476",
    appId: "1:937165411476:web:98a591d8e8364ac51bd081",
    measurementId: "G-1D480E6ZDQ"
  };

  const firebasee = firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();

  var email="";

  export const GoogleLogin=()=>{
    return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => 
      {var user = result.user
       Login(result.user.email,result.user.displayName);
       email=(result.user.email);
       validar();
    
    });} 
         
    
export const validar=()=>{
        if(email.includes("@unsaac.edu.pe")){
            var result=true;
            console.log("puede entrar")
        }else{
            var result= false;
            console.log("no puede entrar")
        }
        console.log(result)
        return result;
}

export const Login=(id,usename)=>{
return {
    type:types.login,
    payload:
    {id,usename}
    
},console.log(id);
}
