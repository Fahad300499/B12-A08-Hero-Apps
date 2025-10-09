import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import loadingimg from '../../assets/logo.png'

const Root = () => {

const location = useLocation()
const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen  ">
      <div className="col-span-full flex justify-center items-center py-20">
                  <img
                    className="w-16 h-16 animate-spin"
                    src={loadingimg}
                    alt="loading"
                  />
                </div>


      </div>
    );
  }



    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;