import React from 'react';
import { NavLink } from 'react-router-dom';

const Books = () => {
    return (
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
            <div>
                {/* category */}
                <h2 className='text-xl font-bold text-center text-[#0D9276] my-3'>-- ক্যাটেগরি --</h2>
                <div className='flex flex-wrap justify-center items-center gap-4'>
                    <NavLink className={'hover:underline'}>উপন্যাস</NavLink>
                    <NavLink>কবিতা</NavLink>
                    <NavLink>গল্প</NavLink>
                    <NavLink>মুক্তিযুদ্ধ</NavLink>
                    <NavLink>বিদেশি</NavLink>
                    <NavLink>দেশ</NavLink>
                    <NavLink>উপন্যাস</NavLink>
                    <NavLink>কবিতা</NavLink>
                    <NavLink>গল্প</NavLink>
                </div>
                <input className='py-3 px-3 bg-[#FF7D29] bg-opacity-10 my-3 w-full rounded-full outline-[#FF7D29]' placeholder='বই এর নাম অথবা লেখকের নাম দিয়ে সার্চ করুন' type="text" />
                {/* books */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default Books;