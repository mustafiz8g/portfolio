import { createBrowserRouter } from "react-router-dom";
import MainaLayout from "./MainLayout";
import Home from "./Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainaLayout></MainaLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])