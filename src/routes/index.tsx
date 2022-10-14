import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader";
import ListRoutes from "./app.routes";

const AppRoute = () => (
    <BrowserRouter>
    <ListRoutes/>
    </BrowserRouter>
    )
export default AppRoute;