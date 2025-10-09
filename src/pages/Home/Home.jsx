import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  const new_data = data.slice(0,8)
  console.log(new_data)
  // console.log(data);
    return (
        
          <div>
            <Banner></Banner>
            <Apps data={new_data}></Apps>
          </div>
           
        
    );
};

export default Home;