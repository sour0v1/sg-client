import { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/images/sg-logo.jpg'
import { HiMenu } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { IoCloseOutline } from 'react-icons/io5';
import { AuthContext } from '../../../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.config';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useRule from '../../../hooks/useRule';
// import useScroll from '../../../hooks/useScroll';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    // const scrollDirection = useScroll();
    // console.log(scrollDirection)
    // const user = false;
    const userRole = useRule();
    // console.log('rule -', userRole)

    // log out
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                // console.log('logout successfully');
                navigate('/');
            })
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center gap-2 w-full px-6 lg:px-6 bg-[#0D9276] py-4 shadow-md text-white `}>
                <div className='flex justify-center items-center gap-2'>
                    <div className='hidden lg:block'>
                        <Link to={'/'}><img className='w-14 h-14 rounded-full border-2' src={logo} alt="logo" /></Link>
                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-sm lg:text-xl font-bold text-white'>স্বপ্নাশ্রয় গ্রন্থাগার</h2>
                        <p className='text-xs lg:text-sm text-white font-bold'>ছড়াবো আলো, দেখাবো পথ</p>

                    </div>
                </div>
                <div className={`sidebar absolute top-0 ${open ? 'left-0 duration-300' : '-left-[600px] duration-300'} lg:static`}>
                    <ul className='flex flex-col w-full lg:w-auto lg:flex-row lg:justify-center lg:items-center gap-5 h-screen lg:h-auto px-9 lg:px-0 py-6 lg:py-0 bg-[#0D9276] text-white z-20 fixed lg:relative'>
                        <p onClick={() => setOpen(!open)} className='text-2xl lg:text-4xl text-white flex justify-end items-center lg:hidden'><RxCross1 /></p>
                        <NavLink onClick={() => setOpen(false)} to={'/'}>হোম</NavLink>
                        <NavLink onClick={() => setOpen(false)} to={'/books/category/all'}>সকল বই</NavLink>
                        <NavLink onClick={() => setOpen(false)} to={'/members/member/executive'}>সদস্যবৃন্দ</NavLink>
                        <NavLink  onClick={() => setOpen(false)} to={'/become-member'}>পাঠক সদস্য হোন</NavLink>
                        {/* {
                            user && <button onClick={() => setDropDown(!dropdown)}><img className='w-8 h-8 border rounded-full' src={user?.photoURL} alt="profile" /></button>
                        } */}
                        {
                            !user &&
                                <>
                                    <NavLink to={'/login'}>লগ ইন</NavLink>
                                    <NavLink to={'/registration'}>রেজিস্ট্রেশন</NavLink>
                                </> 
                        }
                        {
                            user && <>
                                <NavLink to={`${userRole === 'admin' ? 'dashboard/admin/profile' : 'dashboard/user/profile'}`} className={'hover:underline'}>ড্যাশবোর্ড</NavLink>
                                <button onClick={() => { setDropDown(!dropdown); handleLogOut() }} className='text-left hover:underline'>লগআউট</button>
                            </>
                        }
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2 lg:hidden'>
                    <h2 onClick={() => setOpen(!open)} className='text-2xl lg:text-4xl text-white'>
                        {
                            !open && <HiMenu />
                        }
                    </h2>
                </div>
            </div>
            {/* <div className={`bg-[#FFFBF5] p-9 fixed flex flex-col gap-3 w-fit  top-24 right-0 z-20 ${dropdown ? 'transform duration-300' : 'hidden'} border mr-6`}>
                <h2 className='font-medium'>{user?.displayName}</h2>
                <NavLink to={`${userRole === 'admin' ? 'dashboard/admin/profile' : 'dashboard/user/profile'}`} className={'hover:underline'}>ড্যাশবোর্ড</NavLink>
                <button onClick={() => { setDropDown(!dropdown); handleLogOut() }} className='text-left hover:underline'>লগআউট</button>
                <button onClick={() => setDropDown(!dropdown)} className='text-xl border w-fit p-1 border-black border-opacity-70'><IoCloseOutline /></button>

            </div> */}
        </>
    );
};

export default Navbar;