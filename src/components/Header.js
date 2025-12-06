import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user); //Yha se bde redux store se jo user slice hai wha se user ki info le rhe hain

  console.log("Header User Info:", user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/errorpage"); // An error happened.
      });
  };

  const defaultImage =
    "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen flex items-center justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=" NetflixLogo"
      />
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-lg"
          src={user?.photoURL ? user.photoURL : defaultImage}
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
