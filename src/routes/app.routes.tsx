import React from "react";

import {Route,Routes } from 'react-router-dom';
import Layout from "../components/Layout";

import Dashbord from "../pages/dashbord";
import List from "../pages/List";

const ListRoutes: React.FC = () => (
      
        <Routes>
        
            <Route path= '/' element={<Layout/>} />
        
        </Routes>
       
   
);

export default ListRoutes;