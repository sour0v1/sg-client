import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import useRule from '../../hooks/useRule';
import ScrollToTop from '../../components/ScrollToTop';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const userRole = useRule();
    const [value, setValue] = useState('প্রোফাইল');
    const [category, setCategory] = useState(false);
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <>
            <div className='max-w-5xl flex justify-center items-center mx-auto w-full  text-white bg-[#0D9276]  py-4 text-center lg:mt-3 relative z-40 border-b lg:rounded-t-xl'>
                <h1 className='lg:text-xl font-bold border-r-2 lg:border-r-0 pr-2 lg:pr-0'>ড্যাশবোর্ড</h1>
                <button onClick={() => setCategory(!category)} className='pl-2 lg:text-xl font-bold lg:hidden flex justify-center items-center text-[#FF9800]'>{value}
                    <span className=' pl-2 lg:hidden text-xl'>{category ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
            </div>
            <div className='max-w-5xl mx-auto mb-9 flex flex-col lg:justify-center items-center gap-6 lg:gap-9 relative'>

                <div className={`dashboard z-20 flex flex-col lg:flex-row justify-center lg:items-center gap-6 bg-[#0D9276] text-white rounded-b-xl px-9 lg:px-0 py-6 w-full shadow-lg absolute lg:static duration-500 ${category ? 'opacity-100 translate-y-0' : 'opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto -translate-y-full lg:-translate-y-0'}`}>

                    {
                        userRole === 'admin' ?
                            <>
                                <NavLink onClick={() =>{ setCategory(!category); setValue('প্রোফাইল')}} className={'hover:underline'} to={'admin/profile'}>প্রোফাইল</NavLink>
                                <NavLink onClick={() =>{ setCategory(!category); setValue('বই যুক্ত করুন')}} className={'hover:underline'} to={'admin/add-book'}>বই যুক্ত করুন</NavLink>
                                <NavLink onClick={() =>{ setCategory(!category); setValue('সদস্য যুক্ত করুন')}} className={'hover:underline'} to={'admin/add-member'}>সদস্য যুক্ত করুন</NavLink>
                                <NavLink onClick={() =>{ setCategory(!category); setValue('এপ্লিকেশন')}} className={'hover:underline'} to={'admin/applications'}>এপ্লিকেশন</NavLink>
                            </> :
                            <>
                                <NavLink onClick={() =>{ setCategory(!category); setValue('প্রোফাইল')}} className={'hover:underline'} to={'user/profile'}>প্রোফাইল</NavLink>
                            </>
                    }

                    <NavLink className={'hover:underline border-t lg:border-t-0 pt-6 lg:pt-0 lg:border-l lg:pl-6'} to={'/'}>হোম</NavLink>
                </div>

                <div className='w-full py-6 px-4 lg:px-9'>
                    <ScrollToTop></ScrollToTop>
                    <Outlet></Outlet>
                </div>
            </div >
        </>
    );
};

export default Dashboard;