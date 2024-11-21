import React from 'react';

const ExtraDonationCard = () => {
    return (
        <div className='lg:flex bg-gray-50 py-10 border rounded-lg px-5 mt-5'>
            <div className=" space-y-4 max-w-xl mx-auto">
              
                <p className="text-sm text-gray-500 uppercase font-semibold">
                    Always Donate For Childrens
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                    Lend a Helping Hand to Those in Need
                </h2>


                <p className="text-gray-600">
                    We help companies develop powerful corporate social responsibility, grantmaking,
                    and employee engagement strategies.
                </p>


                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold">
                    Donate Now
                </button>

                <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">

                        <img
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Volunteer"
                        />
                        <img
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Volunteer"
                        />
                        <img
                            className="w-8 h-8 rounded-full border-2 border-white"
                            src="https://randomuser.me/api/portraits/men/28.jpg"
                            alt="Volunteer"
                        />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                        Join Our Volunteer <span className="text-green-600">+4k</span>
                    </span>
                </div>


                <div className="flex items-center space-x-2">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Total Donation
                    </div>
                    <div className="text-sm text-gray-600">65%</div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co.com/2nVnj1h/1520060829225.jpg" alt="" />
            </div>
        </div>
    );
};

export default ExtraDonationCard;