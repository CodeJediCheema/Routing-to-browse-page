import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () =>{

    const dispatch = useDispatch();

    const appRoute = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // This is executed whenever my user sign in or sign up
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid , email: email , displayName: displayName, photoURL: photoURL}));

              // NOW HERE WHEN THE USER SIGN IN/ UP , I NEED TO NAVIGATE TO "/browse", 
               // However, here it is not possible because we have provided route to Body.js
               // and navigate can only work in child components.
              
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });

    },[]);


    return <div>
        <RouterProvider router={appRoute}/>

    </div>
};

export default Body;