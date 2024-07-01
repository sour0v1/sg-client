import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/home/navbar/Navbar';
import Footer from './pages/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;