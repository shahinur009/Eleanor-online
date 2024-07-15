import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import AllProducts from "../Pages/AllProducts/AllProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/all-products',
                element: <AllProducts></AllProducts>
            }
        ]
    },
]);