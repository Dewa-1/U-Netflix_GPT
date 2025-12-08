import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { defaultImage, defaultProfileImage, netflixLogo } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user); //Yha se bde redux store se jo user slice hai wha se user ki info le rhe hain

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorPage")
      });
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        //ye tab chalega jb signIn ya signUp successfully ho jaye

        const { uid, email, displayName, photoURL } = user; //pehle login wali firebase api chalegi uske baad yha onAuthStateChanged chalega
        dispatch(addUser({ uid, email, displayName, photoURL }));    // Aur jese auth chla wese hi user ki info ko redux me store ho ja rhi hai
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


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex items-center justify-between">
      <img
        className="w-44"
        src={netflixLogo}
        alt=" NetflixLogo"
      />
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-lg"
          src={user?.photoURL ? user.photoURL : defaultProfileImage}
          alt="user-icon"
        />
        {user && (
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-2 rounded-md text-white "
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
