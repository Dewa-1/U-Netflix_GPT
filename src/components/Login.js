import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);

  const toggleIsSignInForm = () =>{
   setIsSignInForm(!IsSignInForm);
  }
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
        <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-12 space-y-6 rounded-md opacity-80 w-[30rem]">
          <h1 className="text-white text-3xl font-extrabold">{IsSignInForm?"SignIn":"SignUp"}</h1>
          {!IsSignInForm && <div><input className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2" type="text" placeholder="Name" /></div>}
          <div><input className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2" type="text" placeholder="Email" /></div>
          {!IsSignInForm && <div><input className="rounded-md  text-gray-100 w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2" type="text" placeholder=" Phone number" /></div>}
          <div><input className="rounded-md  text-gray-100 border-white w-[100%] h-15 p-4 bg-black opacity-80 border-x-2 border-y-2" type="password" placeholder="Password" /></div>
          <button className="bg-red-700 text-white w-[100%] h-10 font-extrabold rounded-md">Sign In</button>
          <div><h1 className="text-white text-center">OR</h1></div>
          <button className="bg-gray-600 text-white w-[100%] h-10 font-extrabold rounded-md">Use a sign-in code</button>
          <div><h3  className="text-white text-center underline">Forgot Password?</h3></div>
          <div><h3  className="text-white cursor-pointer" onClick={toggleIsSignInForm}>{IsSignInForm?"New to Netflix?Sign up now.":"Already Registered? Sign In Now."}</h3></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
