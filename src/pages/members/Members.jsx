
import { NavLink, Outlet } from 'react-router-dom';
import './Members.css'
import ScrollToTop from '../../components/ScrollToTop';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Members.css'

const Members = () => {
    const [category, setCategory] = useState(false);
    return (
        <div className='max-w-5xl mx-auto px-6 lg:px-0 mt-24 lg:mt-32'>
            <div className='w-full relative'>
                {/* category */}
                <button onClick={() => setCategory(!category)} className='lg:text-xl w-full font-bold text-center text-white bg-[#0D9276] py-3 px-3 border-2 flex justify-center items-center lg:pointer-events-none lg:hidden'>সদস্যবৃন্দ
                <span className='text-white pl-3 lg:hidden text-xl'>{category ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
                <div id='members' className={`category z-30 overflow-auto h-[300px] grid w-full lg:flex flex-wrap justify-center items-center absolute lg:static gap-2  shadow-lg lg:gap-6 p-3 lg:p-6 lg:border-none duration-500 bg-[#0D9276] border-b-2 rounded-b-xl text-white ${category ? 'opacity-100 translate-y-0' : 'opacity-0 lg:opacity-100  -translate-y-full lg:translate-y-0 pointer-events-none lg:pointer-events-auto border-none'}`}>
                    <NavLink onClick={() => setCategory(!category)} to={'member/executive'}>কার্যকরী সদস্য</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'member/general'}>সদস্য</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'member/reader'}>পাঠক সদস্য</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'member/advisory'}>উপদেষ্টা মণ্ডলীর সদস্য</NavLink>
                    <NavLink onClick={() => setCategory(!category)} to={'member/lifetime'}>আজীবন সদস্য</NavLink>
                </div>
                <div>
                    <ScrollToTop></ScrollToTop>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Members;