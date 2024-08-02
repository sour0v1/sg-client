import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/home/navbar/Navbar';
import Footer from './pages/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

const Root = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-[72px] lg:mt-20'>
                <ScrollToTop></ScrollToTop>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;