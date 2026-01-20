import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { userProfileImage } from "../utils/constants";
import toast from "react-hot-toast";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const username = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(({ user }) => {
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: userProfileImage,
          });

          toast.success("Account created successfully! 🎬");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          toast.error("Signup failed");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          toast.success("Welcome back! 🎬");
        })
        .catch((error) => {
          setErrorMessage(error.message);
          toast.error("Signin failed");
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-black bg-opacity-65
          w-[90%] sm:w-full max-w-md
          p-6 sm:p-8 md:p-10
          rounded-md
          space-y-4 sm:space-y-6
        "
      >
        <h1 className="text-white text-2xl sm:text-3xl font-bold">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!IsSignInForm && (
          <input
            ref={username}
            type="text"
            placeholder="Name"
            className="input w-full rounded-md px-2 py-2.5 bg-black text-gray-100 border-x-2 border-y-2"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="input w-full rounded-md px-2 py-2.5 bg-black text-gray-100 border-x-2 border-y-2"
        />

        {!IsSignInForm && (
          <input
            ref={phoneNumber}
            type="text"
            placeholder="Phone Number"
            className="input w-full px-2 hidden rounded-md bg-black py-2.5 sm:block text-gray-100 border-x-2 border-y-2"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input px-2 rounded-md w-full py-2.5 bg-black text-gray-100 border-x-2 border-y-2"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm font-semibold">{errorMessage}</p>
        )}

        <button
          onClick={handleClick}
          className="w-full bg-red-600 hover:bg-red-700 transition py-2.5 rounded-md font-bold text-white"
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-center text-white text-sm">OR</div>

        <button
          type="button"
          className="w-full bg-gray-600 hover:bg-gray-700 transition py-2.5 rounded-md font-bold text-white"
        >
          Use a sign-in code
        </button>

        <p className="text-center text-sm text-white underline cursor-pointer">
          Forgot password?
        </p>

        <p
          onClick={() => setIsSignInForm(!IsSignInForm)}
          className="text-white text-sm cursor-pointer"
        >
          {IsSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
