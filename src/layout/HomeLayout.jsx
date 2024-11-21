import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Banner from '../components/banner';
import About from '../components/About';
import Woork from '../components/Woork';
import ExtraDonationCard from '../components/extraDonationCard';

const HomeLayout = () => {
    return (
        <div>
            
            <header>
                <Navbar></Navbar>
            </header>
            <div className='lg:w-11/12 mx-auto mb-10'>
                <Banner></Banner>
                <ExtraDonationCard></ExtraDonationCard>
                <About></About>
                <Woork></Woork>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;