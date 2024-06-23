import { useState } from 'react';
import logo from '../../../assets/images/sg-logo.jpg'
import { HiMenu } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center gap-2 w-full px-6 lg:px-6 bg-[#FFFBF5] py-3 shadow-md'>
                <div className='flex justify-center items-center gap-2'>
                    <div>
                        <img className='w-16 h-16 rounded-full border-2' src={logo} alt="logo" />
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-xl lg:text-xl font-bold text-[#0D9276]'>স্বপ্নাশ্রয় গ্রন্থাগার</h2>
                        <p className='text-sm text-[#FF7D29] font-bold'>ছড়াবো আলো, দেখাবো পথ</p>

                    </div>
                </div>
                <div className={`sidebar absolute top-0 ${open ? 'left-0 duration-300' : '-left-[600px] duration-300' } lg:static border-r`}>
                    <ul className='flex flex-col lg:flex-row lg:justify-center lg:items-center gap-3 h-screen lg:h-auto px-6 lg:px-0 py-4 lg:py-0 bg-[#FFFBF5] text-[#0D9276] z-20 fixed lg:relative'>
                        <NavLink onClick={() => setOpen(false)} to={'/'}>Home</NavLink>
                        <NavLink onClick={() => setOpen(false)} to={'/books'}>Books</NavLink>
                        <NavLink to={'/members'}>Members</NavLink>
                        <NavLink to={'/registration'}>Become a Member</NavLink>
                        <NavLink to={'/login'}>Log In</NavLink>
                    </ul>
                </div>
                <h2 onClick={() => setOpen(!open)} className='text-4xl lg:hidden text-[#0D9276]'>
                {
                    !open ? <HiMenu /> : <RxCross1 />
                }
                </h2>
            </div>
        </>
    );
};

export default Navbar;