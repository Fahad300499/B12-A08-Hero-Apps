import React from 'react';
import logo from '../../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-neutral text-neutral-content p-10">
  <div className='flex justify-between gap-20 items-center max-w-5/6 mx-auto'>
    <div>
      <div className='flex items-center gap-4'>
        <img className='w-15' src={logo} alt="" srcset="" />
      <span>HERO.IO</span>
      </div>
    </div>
    <div>
      <h1>Social Links</h1>
      <div className='flex gap-3'>
        <FaXTwitter />
      <FaLinkedin />
      <FaFacebook />
      </div>

    </div>
  </div>
  <h1 className='text-center mt-5'>Copyright © 2025 - All right reserved</h1>
</footer>

    );
};

export default Footer;