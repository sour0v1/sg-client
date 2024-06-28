import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto w-full bg-[#FF7D29] bg-opacity-5 py-4 text-center mb-3'>
                <h1 className='text-[#0D9276] opacity-90 text-xl font-medium'>Dashboard</h1>
            </div>
            <div className='max-w-5xl mx-auto mb-9 flex flex-col lg:flex-row gap-6 lg:gap-9'>

                <div className='dashboard flex flex-row lg:flex-col flex-wrap gap-6 bg-[#FF7D29] bg-opacity-5 px-9 py-6 lg:h-screen lg:w-1/4'>
                    <NavLink to={'admin/profile'}>Profile</NavLink>
                    <NavLink to={'admin/add-book'}>Add book</NavLink>
                    <NavLink to={'admin/add-member'}>Add Member</NavLink>
                    <NavLink to={'admin/applications'}>Applications</NavLink>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div className='px-9 pb-6 lg:h-screen lg:w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;