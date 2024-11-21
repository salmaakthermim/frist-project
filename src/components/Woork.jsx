import React from 'react';
import logIcon from "../assets/loginIcon.jpg"
import submit from "../assets/images.png"
import form from "../assets/from.jpg"

const Woork = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10 '>How It Works</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 border rounded-3xl mt-5'>
                <div className="card bg-base-100 w-96">
                    <figure className="px-10 pt-10">
                        <img
                            src={logIcon}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-center items-center">Log In</h2>
                        <p>Sign in to your account to access the donation form.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96">
                    <figure className="px-10 pt-10">
                        <img
                            src={form}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-center items-center">Fill the Form</h2>
                        <p>Provide details about the items you wish to donate, including the type and quantity of winter clothing.</p>

                    </div>
                </div>
                <div className="card bg-base-100 w-96">
                    <figure className="px-10 pt-10">
                        <img
                            src={submit}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-center items-center">Submit</h2>
                        <p>Complete the process, and our team will guide you to the nearest collection point.</p>

                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-5'> Convenient Collection Points</h1>
                <p>We’ve set up donation collection points in various locations to make it easier for you to contribute. After submitting your donation form, you’ll receive details about the nearest drop-off location.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-5'>Supported Divisions</h1>
                <p>We currently operate across the following divisions in Bangladesh:</p>
                
                    <li>Dhaka</li>
                    <li>Chattogram</li>
                    <li>Rajshahi</li>
                    <li>Khulna</li>
                    <li>Barishal</li>
                    <li>Sylhet</li>
                    <li>Mymensingh</li>
                    <li>Rangpur</li>
                <p>Your donations will be collected, sorted, and distributed to vulnerable communities in these divisions. Every item you give makes a direct impact!</p>
            </div>
        </div>
    );
};

export default Woork;