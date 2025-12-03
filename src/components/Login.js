import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const username = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    //Mtlb ki agar message aa rha hai to signIn/signup nahi hoga kyunki validation fail hua hai
    if (message) return;

    //SIGNUP LOGIC YHA AAEGA 

    if (!IsSignInForm) {
      //SignUp Logic yha check hoga ki user ne sahi data dala hai ya nahi agr sahi dala hai to firebase me user create kar dena hai

      createUserWithEmailAndPassword(
        auth,
        email.current.value,              //yha auth ki state change hui pehle uske baad hi onAuthStateChanged chalega
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

updateProfile(user, {
  displayName: username.current.value, photoURL: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
}).then(() => {
  
  navigate("/browse");
}).catch((error) => {

  setErrorMessage(error.message);
  // An error occurred
  // ...
});


          console.log(user);
                                             // dispatch(addUser({    //Ek tareeka hai redux me user info store karne ka
                                              //   uid: user.uid,
                                              //   email: user.email,
                                              // }));
          alert("User registered successfully");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          alert("Error signing up: " + errorMessage); 
          // ..
        });
    }

    //SIGNIN LOGIC YHA AAEGA
    else {
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          alert("User signed in successfully");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          alert("Error signing in: " + errorMessage);
        });
    }
  };

  const toggleIsSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
          alt=""
        />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-12 space-y-6 rounded-md opacity-90 w-[30rem]"
        >
          <h1 className="text-white text-3xl font-extrabold">
            {IsSignInForm ? "SignIn" : "SignUp"}
          </h1>
          {!IsSignInForm && (
            <div>
              <input
                ref={username}
                className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2"
                type="text"
                placeholder="Name"
              />
            </div>
          )}
          <div>
            <input
              ref={email}
              className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2"
              type="text"
              placeholder="Email"
            />
          </div>
          {!IsSignInForm && (
            <div>
              <input
                ref={phoneNumber}
                className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2"
                type="text"
                placeholder=" Phone number"
              />
            </div>
          )}
          <div>
            <input
              ref={password}
              className="rounded-md  text-gray-100 border-white w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 font-bold text-lg py-4">
              {errorMessage}
            </p>
          </div>
          <button
            className="bg-red-700 text-white w-[100%] h-10 font-extrabold rounded-md"
            onClick={handleClick}
          >
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <h1 className="text-white text-center">OR</h1>
          </div>
          <button className="bg-gray-600 text-white w-[100%] h-10 font-extrabold rounded-md">
            Use a sign-in code
          </button>
          <div>
            <h3 className="text-white text-center underline">
              Forgot Password?
            </h3>
          </div>
          <div>
            <h3
              className="text-white cursor-pointer"
              onClick={toggleIsSignInForm}
            >
              {IsSignInForm
                ? "New to Netflix?Sign up now."
                : "Already Registered? Sign In Now."}
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
