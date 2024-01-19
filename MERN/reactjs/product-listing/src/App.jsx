import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import Home from './Home';
import Cart from './Cart';

export default function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path:"cart",
                    element:<Cart/>
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={routes} />
    )
}
