import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { addToStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import RatingChart from '../../components/RatingChart';

const MySwal = withReactContent(Swal)

const AppDetails = () => {
    const {id}=useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app=>app.id === appId);
    const {image, title, companyName, description}= singleApp;
    const [select,setSelect]=useState(false)

    const handleInstalled = (id)=>{
        setSelect(true)
        MySwal.fire({
  title: "Grete!",
  text: " App is Installed!",
  icon: "success"
});

        addToStoreDB(id);
         
    }

    return (
        <div>
            <div className='md:flex items-center p-10 gap-18'>


            <img className='w-46' src={image} alt="" srcset="" />
            <div>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <p>Developed By {companyName}</p>
                <div className='border-b-1 border-dashed border mt-4'></div>
                <div className='flex justify-between items-center gap-7 my-4'>
                    <div>
                        <img className='w-7' src={downloadIcon} alt="" srcset="" />
                        <p>Downloads</p>
                        <p className='text-2xl font-bold'>8M</p>
                    </div>
                    <div>
                        <img className='w-7' src={ratingIcon} alt="" srcset="" />
                        <p>Average Rating</p>
                        <p className='text-2xl font-bold'>4.9</p>
                    </div>
                    <div>
                        <img className='w-7' src={reviewIcon} alt="" srcset="" />
                        <p>Total Reiews</p>
                        <p className='text-2xl font-bold'>54K</p>
                    </div>
                </div>
                <div className='border-b-1 border-dashed border'></div>
                <div>
<button
    onClick={() => handleInstalled(id)}
    className={`px-4 rounded-2xl mt-3 py-2 text-white ${
      select ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
    }`}
    disabled={select} 
  >
    {select ? <p>Uninstall</p> : <p>Install</p>}
  </button>
                    
                </div>
            </div>
        </div>

        <RatingChart></RatingChart>

        <div className=' my-10 p-2'>
            <h1 className='text-2xl font-bold mb-4'>Description</h1>
            <p className='text-justify'>{description}</p>
        </div>
        </div>
        
    );
};

export default AppDetails;