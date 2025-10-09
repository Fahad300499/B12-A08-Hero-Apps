import React from 'react';
import error from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center mt-40">
           <div className='text-center'>
            <img className='text-center' src={error} alt="" srcset="" /> 
           <h1 className="text-4xl text-center font-bold mt-8">Oops, page not found!</h1>
           <p className='text-center my-3'>The page you are looking for is not available.</p>
           <button className='bg-violet-600 text-white btn mx-auto'>Go Back!</button>
           </div>
        </div>
    );
};

export default ErrorPage;