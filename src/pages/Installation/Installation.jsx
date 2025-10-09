import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getstoredApp, removeFromDB } from '../../utility/addToDB';
import AllApps from '../AllApps/AllApps';
import SingleApp from '../SingleApp/SingleApp';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Installation = () => {
    const [appList, setAppList] = useState([]);
    const data = useLoaderData();
    
    

    useEffect(()=> {
        const storedAppData = getstoredApp();
        const ConvertedAppData = storedAppData.map(id=> parseInt(id))
        const myinstallData = data.filter(app=> ConvertedAppData.includes(app.id))
        setAppList(myinstallData)
    }, [])

    const handleSort = (type) => {
        if(type === "downloads"){
            const sortByDownloads = [...appList].sort((a,b)=> a.downloads - b.downloads)
            setAppList(sortByDownloads);
        }
        if(type === "downloads2"){
            const sortByDownloads = [...appList].sort((a,b)=> b.downloads - a.downloads)
            setAppList(sortByDownloads);
        }

    }


    const handleUninstall = (id) => {
        removeFromDB(id);
        const remainingApps = appList.filter(ap => ap.id !== id);
        setAppList(remainingApps);

        console.log(`App with ID ${id} uninstalled and removed from list.`);
        MySwal.fire({
  title: "Good job!",
  text: "Uninstalled this App!",
  icon: "success"
});
    }; 
    return (
        <div className='p-4'>
        <div className='flex justify-between items-center my-5'>
            <h1>{appList.length} : Apps Found</h1>
            <div>
                <details className='dropdown'>
                    <summary className='btn m-1'>Sort by:</summary>
                    <ul className='menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
                        <li><a onClick={()=> handleSort("downloads")}>Low to High</a></li>
                        <li><a onClick={()=> handleSort("downloads2")}>High to Low</a></li>
                    </ul>
                </details>
            </div>
        </div>
            
            <div className=''>
                {
                appList.map(ap=><>
                <div className='md:flex justify-between items-center border border-gray-200 p-4 mb-2 rounded'>
                            <div className=' p-2 flex items-center gap-6'>
                            <img className='w-30' src={ap.image} alt="" srcset="" />
                                <div>
                                <h1 className='font-bold mb-3'>{ap.title}</h1>
                                <div className='flex gap-3 items-center'>
                                <p className='btn'><FaDownload /> {ap.downloads}</p>
                                <p className='btn'><FaStar /> {ap.ratingAvg}</p>
                                <p>258 MB</p>
                                </div>
                            </div>
                            
                            </div>

                            <div>
                                <button onClick={()=>handleUninstall(ap.id)} className='bg-green-500 px-4 py-2 rounded-2xl mt-5 text-white'>Uninstall</button>
                            </div>
                
                        </div>
                </>)
            }
            </div>
        </div>
    );
};

export default Installation;