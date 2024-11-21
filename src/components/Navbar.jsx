
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/user.png";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <NavLink className="mr-5" to="/">
                Home
            </NavLink>
            <NavLink className="mr-5" to="/DonationCampaigns">
                DonationCampaigns
            </NavLink>
            <NavLink className="mr-5" to="/How to Help">
                How to Help
            </NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
        </>
    );

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto text-center items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className="h-20" src={logo} alt="Logo" />
                {/* {user && <p className="text-sm text-gray-600">{user.email}</p>} */}
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-3">
                   
                    {user && user.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="w-10 h-10 rounded-full border-2 border-gray-300"
                        />
                    ) : (
                        <img
                            src={userIcon}
                            alt="Default User"
                            className="w-10 h-10 rounded-full border-2 border-gray-300"
                        />
                    )}

                    
                    {user && user?.email ? (
                        <button
                            onClick={logOut}
                            className="py-3 text-center bg-black text-white px-9 rounded-full">
                            Log-out
                        </button>
                    ) : (
                        <Link to="/auth/login">
                            <button className="lg:py-3 text-center bg-black text-white lg:px-9 rounded-full">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
