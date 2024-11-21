import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-7'>About</h1>
            <p>At Winter Donation, our mission is to ensure that no one in Bangladesh has to face the harsh winter without warm clothing. Thousands of people, especially in rural and low-income communities, are vulnerable to the cold weather. Our platform bridges the gap between those willing to help and those who need help the most.
                Through this website, donors can connect with dedicated volunteers working tirelessly to distribute winter clothes to those in need. Together, we aim to spread warmth, compassion, and hope.</p>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10  gap-5'>
                    <div className='text-center border p-5 bg-red-500 rounded-3xl text-white'>
                        <h1>Sign Up</h1>
                        <p>Create an account to access our donation campaigns and browse the details of ongoing initiatives.</p>
                    </div>
                    <div className='text-center border p-5 rounded-3xl bg-lime-400'>
                        <h1>Donate Easily</h1>
                        <p>Fill out a simple form to pledge your winter clothing donations. Your contributions will directly benefit people in need.</p>
                    </div>
                    <div className='text-center border p-5 rounded-3xl bg-orange-500  py-10'>
                        <h1>Spread the Word</h1>
                        <p> Share our mission with your friends and family to amplify the impact of the donation drives.</p>
                    </div>

                </div>
        </div>
    );
};

export default About;