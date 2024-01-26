import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Ourchoes from './Component/Header/Ourchoes';
import Menu from './Component/Home/Menu';
import Order from './Component/Home/Order';
import Login from './Component/Pages/Login/Login';
import Singup from './Component/Pages/Singup/Singup';

import Authprovider from './Component/Fairbase/AuthProvider';
import Allsevices from './Component/Header/Allsevices';
import EnrollPage from './Component/Header/EnrollPage';
import EnrollCart from './Component/Header/EnrollCart';
import PrivetRout from './Component/Home/PrivetRout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[{
      path:'/',
      element:<Main></Main>
    },{
      path:'ourchoies',
      element:<Ourchoes></Ourchoes>
      
    },{
      path:'Instructors',
      element:<Menu></Menu>
    },{
      path:'Classes',
      element:<Order></Order>
    },{
      path:'login',
      element:<Login></Login>
    },{

      path:'singup',
      element:<Singup></Singup>
    },{
      path:'allservice/:id',
      element:<Allsevices></Allsevices>,
      loader:({params})=>fetch(`http://localhost:3000/children/${params.id}`)
      

    },
  {
  path:'enrollpage/:id',
  element:<EnrollPage></EnrollPage>,
  loader:({params})=>fetch(`http://localhost:3000/children/${params.id}`)
  },{
    path:'enrollcart',
    element:<PrivetRout><EnrollCart></EnrollCart></PrivetRout>,
   
  
  }]
    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
   
  </React.StrictMode>,
)
