import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { Link } from 'react-router';

const Apps = ({data}) => {
    // console.log(data)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Trending Apps</h1>
            <p className='text-center mb-8'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<p>Loading.....</p>}>
            <div className='grid m-2 grid-cols-1 md:grid-cols-4 my-4 gap-5'>
                {
                data.map(app=><SingleApp key={app.id} app={app}></SingleApp>)
            }
            </div>
            </Suspense>
            <div className='flex justify-center my-4'>
                <Link to='/apps'>
                <button className='bg-violet-500 px-5  text-white py-3 rounded-2xl'>Show All</button>

                </Link>
                
               
            </div>
        </div>
    );
};

export default Apps;