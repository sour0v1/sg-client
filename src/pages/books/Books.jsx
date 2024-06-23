import React from 'react';
import { NavLink } from 'react-router-dom';
import './Books.css'
import Table from '../../components/Table';

const Books = () => {
    return (
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
            <div className='w-full'>
                {/* category */}
                <h2 className='text-xl font-bold text-center text-[#0D9276] my-6'>-- ক্যাটেগরি --</h2>
                <div className='category flex flex-wrap justify-center items-center gap-6'>
                    <NavLink className={''}>উপন্যাস</NavLink>
                    <NavLink>গল্প</NavLink>
                    <NavLink>মুক্তিযুদ্ধ</NavLink>
                    <NavLink>বাংলাদেশ</NavLink>
                    <NavLink>দর্শন</NavLink>
                    <NavLink>নাটকের বই</NavLink>
                    <NavLink>প্রবন্ধ</NavLink>
                    <NavLink>কবিতা</NavLink>
                    <NavLink>সায়েন্স ফিকশন</NavLink>
                    <NavLink>রাজনীতি</NavLink>
                    <NavLink>ভাষা ও অভিধান</NavLink>
                    <NavLink>আইন ও বিচার</NavLink>
                    <NavLink>ইংরেজি ভাষার বই</NavLink>
                    <NavLink>রান্নাবান্না, খাদ্য ও পুষ্টি</NavLink>
                    <NavLink>কৃষি ও কৃষক</NavLink>
                    <NavLink>ইতিহাস ও ঐতিহ্য</NavLink>
                    <NavLink>ধর্ম বিষয়ক</NavLink>
                    <NavLink>রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</NavLink>
                    <NavLink>আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</NavLink>
                    <NavLink>গণিত, বিজ্ঞান ও প্রযুক্তি</NavLink>
                </div>
                <div className='w-full text-center'>
                    <input className='py-3 px-3 bg-[#FF7D29] bg-opacity-10 my-6 w-full rounded-full outline-[#FF7D29] lg:w-2/3' placeholder='বই এর নাম অথবা লেখকের নাম দিয়ে সার্চ করুন' type="text" />
                </div>
                {/* books */}
                <div>
                    <Table></Table>
                </div>
            </div>
        </div>
    );
};

export default Books;