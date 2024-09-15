import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleCheck = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current.value;

    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);

    const message = CheckValidateData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) {
      return;
    }

    if (isSignIn) {
      // For signing in existing users
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          handleFirebaseErrors(errorCode, errorMessage);
        });
    } else {
      // For signing up new users
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              console.error("Profile update error:", error);
            });
          console.log("User signed up:", user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          handleFirebaseErrors(errorCode, errorMessage);
        });
    }
  };

  // A helper function to handle Firebase errors
  const handleFirebaseErrors = (errorCode, errorMessage) => {
    if (errorCode === "auth/email-already-in-use") {
      setErrorMessage("Email is already in use.");
    } else if (errorCode === "auth/weak-password") {
      setErrorMessage("Password is too weak.");
    } else if (errorCode === "auth/invalid-email") {
      setErrorMessage("Invalid email address.");
    } else if (errorCode === "auth/user-not-found") {
      setErrorMessage("User not found.");
    } else if (errorCode === "auth/wrong-password") {
      setErrorMessage("Incorrect password.");
    } else {
      setErrorMessage(errorMessage + " (" + errorCode + ")");
    }

    console.error("Firebase error: ", errorCode, errorMessage);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 md:p-8 rounded-md"
      >
        <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-3 px-3 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <p className="text-red-600 text-center font-bold text-xl">
          {errorMessage}
        </p>
        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-2 rounded-md mt-6 hover:bg-red-700 transition-colors"
          onClick={handleCheck}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white text-center mt-4 cursor-pointer"
          onClick={handleSignInForm}
        >
          {isSignIn ? (
            <>
              New to Netflix? <span className="hover:text-red-600">Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span className="hover:text-red-600">Sign In</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
