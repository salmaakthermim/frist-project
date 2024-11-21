import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;