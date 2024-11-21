import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Donation from "../pages/Donation";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonationDetails from "../pages/DonationDetails";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
   
        
    },

    {
        path: "/DonationCampaigns",
        element: <Donation></Donation>,
        loader: () => fetch("/Donation.json")


    },


    {
        path: "/donation/:id",
        element: <PrivetRoute>
            <DonationDetails></DonationDetails>
        </PrivetRoute>,
        loader: () => fetch('/Donation.json')
    },

    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
        
    }
])

export default router;