
import { NavLink, Outlet } from 'react-router-dom';
import './Members.css'

const Members = () => {
    return (
        <div className='mt-28'>
            <div className='max-w-5xl mx-auto px-6 lg:px-0'>
                <div className='members bg-[#FF7D29] bg-opacity-10 py-3 px-3 flex flex-wrap justify-center items-center gap-4 lg:gap-9 my-6'>
                    <NavLink to={'member/executive'}>কার্যকরী সদস্য</NavLink>
                    <p className='h-6 border-r-2 border-[#FF7D29]'></p>
                    <NavLink to={'member/general'}>সদস্য</NavLink>
                    <p className='h-6 border-r-2 border-[#FF7D29]'></p>
                    <NavLink to={'member/reader'}>পাঠক সদস্য</NavLink>
                    <p className='h-6 border-r-2 border-[#FF7D29]'></p>
                    <NavLink to={'member/advisory'}>উপদেষ্টা মণ্ডলীর সদস্য</NavLink>
                    <p className='h-6 border-r-2 border-[#FF7D29]'></p>
                    <NavLink to={'member/lifetime'}>আজীবন সদস্য</NavLink>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Members;