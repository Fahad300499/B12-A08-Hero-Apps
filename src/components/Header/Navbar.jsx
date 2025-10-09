import React from 'react';
import { Link, Links } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
    const links = <>
    <Link to='/'><li className='m-2'>Home</li></Link>
   <Link to='/apps'> <li className='m-2'>Apps</li></Link>
   <Link to='/installation'> <li className='m-2'>Installation</li></Link>
   
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="flex items-center text-xl">
      <Link to='/'>
      <img className="w-14" src={logo} alt="" srcset="" />
      
      </Link>
      <span className="text-violet-600">HERO.IO</span></a>
      
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/ProgrammingHero1/B12-A08-Hero-Apps/blob/main/Hero%20IO.fig' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub /> Contribute</a>
  </div>
</div>

    );
};

export default Navbar;