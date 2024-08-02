import React from 'react';
import { FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='z-10 relative'>
            <footer className="footer footer-center bg-[#0D9276] text-white p-6">
                <nav className="flex justify-center items-center flex-wrap gap-4">
                    <Link className='underline' to={'/'}>হোম</Link>
                    <Link className='underline'>আমাদের সম্পর্কে</Link>
                    <Link className='underline' to={'/books/category/all'}>সকল বই</Link>
                    <Link className='underline' to={'/become-member'}>পাঠক সদস্য হোন</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">

                        <a className='text-2xl' href="https://maps.app.goo.gl/UMUyVzBa56xfkvF78"><FaMapMarkerAlt /></a>

                        <a className='text-2xl' href="https://www.facebook.com/profile.php?id=61560960066757"><FaFacebook /></a>

                    </div>
                </nav>
                <aside>
                    <p>কপিরাইট © {new Date().getFullYear()} - সমস্ত অধিকার সংরক্ষিত <span className='font-medium'>স্বপ্নাশ্রয় গ্রন্থাগার</span></p>
                    {/* <p>Developed by <a className='underline' href="https://www.facebook.com/profile.php?id=100080194081239">Me</a></p> */}
                </aside>
            </footer>
        </div>
    );
};

export default Footer;