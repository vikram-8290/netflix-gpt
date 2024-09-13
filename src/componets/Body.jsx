import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Body() {
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
            {/* Use RouterProvider with createBrowserRouter */}
            <RouterProvider router={appRoute} />
        </div>
    );
}

export default Body;
