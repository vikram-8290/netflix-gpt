import React, { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; // Make sure this import is correct
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; // Correct import
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user); // Gets the user from Redux
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown menu
  const profileRef = useRef(null); // Ref for the profile icon

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign Out Error:", error);
      });
    setDropdownOpen(false); // Close dropdown after sign out
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(addUser({ uid: user.uid  , email: user.email, displayName: user.displayName})); 
            navigate("/browse");
            // Pass user payload if needed
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    });

    return () => unsubscribe(); // Cleanup on unmount
}, [dispatch]);

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black px-4 py-4 mx-1 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* Check if the user is logged in */}
      {user ? (
        <div className="relative flex items-center p-2">
          <img
            alt="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className="w-12 h-12 m-2 cursor-pointer"
            onClick={handleDropdownToggle}
            ref={profileRef} // Ref for the profile icon
          />
          {dropdownOpen && (
            <div
              ref={dropdownRef} // Ref for the dropdown menu
              className="drop-down border border-gray-600 rounded-lg absolute bg-black text-white"
              style={{ top: "100%", right: 0 }} // Position below the profile icon
            >
              <p className="px-4 py-2">Signed in as: {user?.displayName}</p>
              <div className="border-t border-gray-600 my-2"></div>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-700 aligin-middle text-white items-center center"
                onClick={handleSignOut} // Only one onClick handler for sign out
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
