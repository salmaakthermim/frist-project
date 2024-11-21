import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../components/DonationCard';
import NavBar from '../components/Navbar';

const Donation = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            <h1 className='text-3xl font-bold text-center my-10'>Donation Campaigns</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    data.map((donations) => (<DonationCard key={donations.id} data={donations}></DonationCard>))
                }
            </div>
        </div>
    );
};

export default Donation;