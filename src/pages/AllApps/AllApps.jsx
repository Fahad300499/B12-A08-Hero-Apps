import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApp from '../AllApp/AllApp';
import loading from '../../assets/logo.png';

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  };

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1 className='text-center text-3xl font-bold mt-5'>Our All Applications</h1>
      <p className='text-center mb-10 text-gray-500'>
        Explore all apps on the market developed by us. We code for millions.
      </p>

     
      <div className='flex justify-between items-center mb-5 mx-5'>
        <h1 className='text-lg font-semibold'>
         
          
            {filteredApps.length} : Apps Found
          
        </h1>

        <div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search by App Title..."
              value={searchTerm}
              onChange={handleSearch}
              className='grow outline-none bg-transparent'
            />
          </label>
        </div>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7 px-5'>
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center py-20">
            <img
              className="w-16 h-16 animate-spin"
              src={loading}
              alt="loading"
            />
          </div>
        ) : filteredApps.length === 0 && data.length > 0 ? (
          <div className="col-span-full text-center py-20">
            <h2 className="text-4xl font-extrabold text-red-500">No Apps Found!</h2>
            <p className="text-lg text-gray-600 mt-2">
              Sorry, no application matches your search term "{searchTerm}".
            </p>
          </div>
        ) : (
          filteredApps.map((app) => <AllApp key={app._id} allSingleApp={app} />)
        )}
      </div>
    </div>
  );
};

export default AllApps;
