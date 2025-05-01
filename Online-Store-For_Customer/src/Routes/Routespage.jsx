import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "./RootLayout";
import Products from "../Pages/Products/Products";
import Search from "../Pages/Search Page/Search";
import Cart from "../Pages/Cart/Cart";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: '/products', element: <Products /> },
            { path: '/products/:id', element: <Products /> },
            { path: '/products/:id/:name', element: <Products /> },
            { path: '/products/:id/:name/:price', element: <Products /> },
            { path: '/products/:id/:name/:price/:quantity', element: <Products /> },
            { path: '/products/:id/:name/:price/:quantity/:category', element: <Products /> },
            { path: '/search', element: <Search /> },
            { path: '/cart', element: <Cart /> },
        ]
    },
])

export default function Routespage() {
    return <RouterProvider router={routes} />;
}