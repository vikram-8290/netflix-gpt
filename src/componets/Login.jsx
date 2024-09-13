import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
        alt="Netflix Logo"
      />
      <form class="flex flex-col bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 md:p-8 rounded-md">
        <h1 class="text-white text-2xl sm:text-3xl font-bold mb-6 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            class="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          class="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          class="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          class="bg-red-600 text-white font-bold py-2 rounded-md mt-6 hover:bg-red-700 transition-colors"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          class="text-white text-center mt-4 cursor-pointer"
          onClick={handleSignInForm}
        >
          {isSignIn ? (
            <>
              New to Netflix? <span class="hover:text-red-600">Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span class="hover:text-red-600">Sign In</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
