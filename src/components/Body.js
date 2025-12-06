import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //ye tab chalega jb signIn ya signUp successfully ho jaye

        const { uid, email, displayName, photoURL } = user; //pehle login wali firebase api chalegi uske baad yha onAuthStateChanged chalega
        dispatch(addUser({ uid, email, displayName, photoURL })); // Aur jese auth chla wese hi user ki info ko redux me store ho ja rhi hai
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
