import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    
    const {image, title, ratingAvg, downloads, id} = app;
    return (
        <Link to={`/appDetails/${id}`}>
        <div className=''>
            <div className='card border text-center p-2'>
            <img  className='w-100 h-80 mx-auto mb-4' src={image} alt="" srcset="" />
            <h1 className='font-bold'>{title}</h1>
            <div className='flex justify-between'>
                <p className='btn'><FaDownload /> {downloads}</p>
                <p className='btn'><FaStar /> {ratingAvg}</p>
            </div>
            </div>
            
        </div>
        </Link>
    );
};

export default SingleApp;