import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Books.css'
import Table from '../../components/Table';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Books = () => {
    const axiosPublic = useAxiosPublic();
    
    return (
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
            <div className='w-full'>
                {/* category */}
                <h2 className='text-xl font-bold text-center text-[#0D9276] my-6'>-- ক্যাটেগরি --</h2>
                <div className='category flex flex-wrap justify-center items-center gap-6'>
                    <NavLink to={'category/all'}>সকল বই</NavLink>
                    <NavLink to={'category/novel'}>উপন্যাস</NavLink>
                    <NavLink to={'category/story'}>গল্প</NavLink>
                    <NavLink to={'category/war'}>মুক্তিযুদ্ধ</NavLink>
                    <NavLink to={'category/bangladesh'}>বাংলাদেশ</NavLink>
                    <NavLink to={'category/vision'}>দর্শন</NavLink>
                    <NavLink to={'category/drama'}>নাটকের বই</NavLink>
                    <NavLink to={'category/essay'}>প্রবন্ধ</NavLink>
                    <NavLink to={'category/poem'}>কবিতা</NavLink>
                    <NavLink to={'category/scifi'}>সায়েন্স ফিকশন</NavLink>
                    <NavLink to={'category/politics'}>রাজনীতি</NavLink>
                    <NavLink to={'category/language'}>ভাষা ও অভিধান</NavLink>
                    <NavLink to={'category/law'}>আইন ও বিচার</NavLink>
                    <NavLink to={'category/english'}>ইংরেজি ভাষার বই</NavLink>
                    <NavLink to={'category/food'}>রান্নাবান্না, খাদ্য ও পুষ্টি</NavLink>
                    <NavLink to={'category/agro'}>কৃষি ও কৃষক</NavLink>
                    <NavLink to={'category/history'}>ইতিহাস ও ঐতিহ্য</NavLink>
                    <NavLink to={'category/religion'}>ধর্ম বিষয়ক</NavLink>
                    <NavLink to={'category/adventure'}>রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</NavLink>
                    <NavLink to={'category/motivation'}>আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</NavLink>
                    <NavLink to={'category/math'}>গণিত, বিজ্ঞান ও প্রযুক্তি</NavLink>
                </div>
                {/* books */}
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Books;