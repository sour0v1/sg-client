import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Books.css'
import Table from '../../components/Table';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ScrollToTop from '../../components/ScrollToTop';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Books = () => {
    const axiosPublic = useAxiosPublic();
    const [category, setCategory] = useState(false);

    return (
        <div className='max-w-5xl mx-auto px-6 lg:px-0 mt-24 lg:mt-32'>
            <div className='w-full relative'>
                {/* category */}
                <button onClick={() => setCategory(!category)} className='lg:text-xl w-full font-bold text-center text-white bg-[#0D9276] py-3 px-3 border-2 flex justify-center items-center lg:pointer-events-none lg:hidden'>ক্যাটেগরি
                    <span className='text-white pl-3 lg:hidden text-xl'>{category ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
                <div className={`category overflow-auto h-[300px] grid z-30 grid-cols-2 lg:flex flex-wrap bg-[#0D9276] text-white justify-center items-center gap-2 rounded-b-lg lg:rounded-lg shadow-lg lg:gap-6 border-b-2 p-3 lg:p-6 lg:border-none duration-500  absolute lg:static ${category ? 'opacity-100 translate-y-0 ' : 'opacity-0 lg:opacity-100 -translate-y-full lg:translate-y-0 pointer-events-none lg:pointer-events-auto border-none'}`}>
                    <NavLink onClick={() => setCategory(!category)} to={'category/all'}>সকল বই</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/novel'}>উপন্যাস</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/story'}>গল্প</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/war'}>মুক্তিযুদ্ধ</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/bangladesh'}>বাংলাদেশ</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/vision'}>দর্শন</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/drama'}>নাটকের বই</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/essay'}>প্রবন্ধ</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/poem'}>কবিতা</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/scifi'}>সায়েন্স ফিকশন</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/politics'}>রাজনীতি</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/language'}>ভাষা ও অভিধান</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/law'}>আইন ও বিচার</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/english'}>ইংরেজি ভাষার বই</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/food'}>রান্নাবান্না, খাদ্য ও পুষ্টি</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/agro'}>কৃষি ও কৃষক</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/history'}>ইতিহাস ও ঐতিহ্য</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/religion'}>ধর্ম বিষয়ক</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/adventure'}>রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/motivation'}>আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'category/math'}>গণিত, বিজ্ঞান ও প্রযুক্তি</NavLink>
                </div>
                {/* books */}
                <div>
                    <ScrollToTop></ScrollToTop>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Books;