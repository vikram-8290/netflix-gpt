import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice'; // Correct import

function Body() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({ uid: user.uid  , email: user.email, displayName: user.displayName})); // Pass user payload if needed
            } else {
                dispatch(removeUser());
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, [dispatch]);

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRoute} />
        </div>
    );
}

export default Body;
