import React from 'react';
import heroImg from '../../assets/hero.png'
import googleImg from '../../assets/google_play_app-png.png'
import appImg from '../../assets/app-store.png'


const Banner = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-4 text-4xl md:text-6xl font-bold'>We build <br /> <span>Productive</span> Apps</h1>
            <p className='my-3 mx-2'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center my-10'>
                <button className=' border mr-3 p-2 rounded-xl shadow flex items-center gap-3 '>
                <img className='w-10' src={googleImg} alt="" srcset="" />
                <a href="https://play.google.com/store/games?hl=en" className='font-bold'>Google Play</a></button>
            <button className=' border p-2 rounded-xl shadow  flex items-center gap-3'>
                <img className='w-10' src={appImg} alt="" srcset="" />
                <a href="https://www.apple.com/app-store/" className='font-bold'>App Store</a></button>
            </div>

            <div className='flex justify-center'>
                <img className='w-[400px] md:w-5/6' src={heroImg} alt="" srcset="" />
            </div>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10 text-white mb-8 rounded-2xl'>
                <h1 className='text-3xl mb-5 font-bold'>Trusted By Millions, Built For You</h1>
                <div className='flex justify-around'>
                    <div>
                        <p>Total Download</p>
                        <p className='text-3xl font-bold'>29.6M</p>
                        <p>21% More than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <p className='text-3xl font-bold'>906K</p>
                        <p>46% More than Last Month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <p className='text-3xl font-bold'>132+</p>
                        <p>31 More will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;