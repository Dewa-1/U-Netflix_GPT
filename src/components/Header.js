import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  defaultProfileImage,
  netflixLogo,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { resetGptSearch, toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";
import toast from "react-hot-toast";
import { resetSearchedMovies } from "../utils/moviesSlice";

const Header = () => {
  const user = useSelector((store) => store.user); //Yha se bde redux store se jo user slice hai wha se user ki info le rhe hain

  const gptSearchEnabled = useSelector((store) => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        toast("Signed out successfully", {
          icon: "👋",
          duration: 2000,
        });
        dispatch(resetGptSearch()); //signout hote hi false krde gpt search ko taaki wapas browse page pe jaye to normal home page hi dikhe
        dispatch(resetSearchedMovies());
      })
      .catch((error) => {
        // An error happened.
        toast.error("Sign out failed");
        console.log(error);
      });
  };

  const handleGptToggle = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //ye watchman ki trh sab dekhta rehta hai ki auth me koi change to ni hua
      if (user) {
        //ye tab chalega jb signIn ya signUp successfully ho jaye

        const { uid, email, displayName, photoURL } = user; //pehle login wali firebase api chalegi uske baad yha onAuthStateChanged chalega
        dispatch(addUser({ uid, email, displayName, photoURL })); // Aur jese auth chla wese hi user ki info ko redux me store ho ja rhi hai
        navigate("/browse"); // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    //ye tab call hoga jb component unmount hoga kyunki jitine baar useEffect chalega utni baar eye event listener type hoga memory leak ka issue aayega
    return () => unsubscribe();
  }, []);

  const handleLanguage = (e) => {
    //yha language change ka logic aayega

    dispatch(changeLanguage(e.target.value)); //yha par jo option ki valu hai wo dispatch ho rhi hai jo identifier ki trh defined hai constants.js me
  };

  return (
    <div className="fixed px-8 py-2 bg-gradient-to-b from-black w-screen flex items-center justify-between z-50">
      <img className="w-44" src={netflixLogo} alt=" NetflixLogo" />

      <div className="flex-col place-items-center justify-between">
        <img
          className="w-12 h-12 rounded-[50%]"
          src={user?.photoURL ? user.photoURL : defaultProfileImage}       //mtlb agar user signIn ho gya to updated photo nhi to default photo
          alt="user-icon"
        />

        {gptSearchEnabled && user && (               //Mtlb agar user signIn ho aur gptSearch(True) pr click kiya ho to
          <select                   
            onChange={handleLanguage}
            name=""
            id=""
            className="h-10 rounded-lg bg-black text-white p-2"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (     //Mtlb yha par jo languages ka dropdown button hai uske liye hai ye aur yha se value property redux store me jaegi
              <option key={lang.identifier} value={lang.identifier}>   
                {lang.name}
              </option>
            ))}
          </select>
        )}

        {user && (
          <button
            onClick={handleGptToggle}
            className="bg-purple-600 px-4 py-2 rounded-md text-white mt-2 mx-8"
          >
            {gptSearchEnabled ? "Home" : "GPT Search"}     
          </button>
        )}
        {user && (
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-2 rounded-md text-white mt-2"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
