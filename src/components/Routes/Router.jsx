import { createBrowserRouter } from "react-router";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import WrongPath from "../WrongPath/WrongPath.jsx";
import Profile from "../Profile/Profile.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <WrongPath/>
    },
    {
        path:"/login",
        element:<Login />,
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path: "/profile",
        element: <Profile/>
    }
])

export default Router;