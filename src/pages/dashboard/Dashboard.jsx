import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import useRule from '../../hooks/useRule';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const userRole = useRule();
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <>
            <div className='max-w-5xl mx-auto w-full  bg-[#FF7D29] bg-opacity-5 py-4 text-center my-3'>
                <h1 className='text-[#0D9276] opacity-90 text-xl font-medium'>Dashboard</h1>
            </div>
            <div className='max-w-5xl mx-auto mb-9 flex flex-col lg:flex-row gap-6 lg:gap-9'>

                <div className='dashboard flex flex-row lg:flex-col flex-wrap gap-6 bg-[#FF7D29] bg-opacity-5 px-9 py-6 lg:h-screen lg:w-1/4'>

                    {
                        userRole === 'admin' ?
                            <>
                                <NavLink className={'hover:underline'} to={'admin/profile'}>Admin Profile</NavLink>
                                <NavLink className={'hover:underline'} to={'admin/add-book'}>Add book</NavLink>
                                <NavLink className={'hover:underline'} to={'admin/add-member'}>Add Member</NavLink>
                                <NavLink className={'hover:underline'} to={'admin/applications'}>Applications</NavLink>
                            </> :
                            <>
                                <NavLink className={'hover:underline'} to={'user/profile'}>Your profile</NavLink>
                            </>
                    }

                    <p className='border border-[#FF7D29] border-opacity-50'></p>

                    <div>
                        <NavLink className={'hover:underline'} to={'/'}>Home</NavLink>
                    </div>
                </div>

                <div className='px-9 pb-6 lg:h-screen lg:w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div >
        </>
    );
};

export default Dashboard;