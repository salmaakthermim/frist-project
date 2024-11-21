import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLoaderData, useParams } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const DonationDetails = () => {
 
    
    
    const data = useLoaderData();
    const {id} = useParams()
    const donation = data.find(donation => donation.id == id)
    console.log(donation);
    
    const { title, image, description, division } = donation;
    
    

// console.log(data)
// return (
//     <div>
//         <header>
//             <NavBar></NavBar>
//         </header>
//         <h1>donation details</h1>
//         <div className="card bg-base-100 border w-5/12 mx-auto">
//             <figure className="px-10 pt-10">
//                 <img
//                     src={image}
//                     alt="Shoes"
//                     className="rounded-xl" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">Shoes!</h2>
//                 <p>{title}</p>
//                 <div className="card-actions">
//                     <button className="btn btn-primary">Buy Now</button>
//                 </div>
//             </div>
//         </div>
//         <main>

//         </main>
//         <Footer></Footer>
//     </div>
// );
// };

const [form, setForm] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   console.log("clicked")
   toast("Thank you !")
    setForm({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      notes: '',
    });
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="container mx-auto py-8">
        {/* Donation Details */}
        <div className=" bg-base-100  lg:w-5/12 lg:mx-auto mb-8">
          <figure className="px-10 pt-10">
            <img src={image} alt={title} className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>Division: {division}</p>
          </div>
        </div>
     

        {/* Donation Form */}
        <div className="w-5/12 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Donation Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Quantity of Items</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g., 2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Item Type</label>
              <input
                type="text"
                name="itemType"
                value={form.itemType}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g., Jacket"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationDetails;