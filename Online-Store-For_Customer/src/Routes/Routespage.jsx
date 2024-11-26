import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "./RootLayout";
import Products from "../Pages/Products/Products";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/products', element: <Products /> }
        ]
    },
])

export default function Routespage() {
    return <RouterProvider router={routes} />;
}