import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ data }) => {
    const { title, image, description, division } = data;
    return (
        <div>
            <div className="card bg-base-100 w-full h-[450px]  gap-5 shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl border" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}?</p>
                    <p className='font-semibold'> Division: {division}</p>
                    <div className="card-actions">
                       <Link to={`/donation/${data.id}`}> <button className="btn btn-primary">Donate Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DonationCard;