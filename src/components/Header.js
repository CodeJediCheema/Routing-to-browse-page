import { LOGO_URL, USER_ICON } from "../utils/constants";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () =>{
    const user = useSelector((store) => store.user);
    
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");

          }).catch((error) => {
            // An error happened.
            navigate("/error");

          });

    }


    return <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between"> 
        <div className="w-44 mx-4 my-2 shadow-md">
            <img src={LOGO_URL} alt="logo" />
        </div>
       { user && (<div className="flex p-6">
            <img  className= "w-10 h-10" src={USER_ICON} alt="user icon"/>
            <button onClick={handleSignOut} className="bg-gradient-to-b from-red-500
             to-red-700 hover:from-red-700 hover:to-red-500
              text-white font-bold ml-2
               hover:text-white hover:shadow-md rounded-lg py-2 
               px-4 transition-all duration-300 ease-in-out">
                Sign Out
                </button>

        </div>)
        }
    </div>
};

export default Header;