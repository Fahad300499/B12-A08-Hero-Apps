import React, { Children, Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../components/ErrorePage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
    {
        index: true,
        loader: ()=>fetch('/appsData2.json'),
        path:"/",
        Component:Home,
    },
    {
        path:'/apps',
        loader: ()=>fetch('/appsData2.json'),
        Component:AllApps,
    },
    {
        path:'/installation',
        loader: ()=>fetch('/appsData2.json'),
        Component:Installation,
    },
    {
        path:'/appDetails/:id',
        loader: ()=>fetch('/appsData2.json'),
        Component:AppDetails,
    }
  ]
  },

 
]);
