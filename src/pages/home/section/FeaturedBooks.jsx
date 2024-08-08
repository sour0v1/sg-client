import React from 'react';
import book1 from '../../../assets/images/books/ses-kobita.png'
import book2 from '../../../assets/images/books/dev.jpeg'
import book3 from '../../../assets/images/books/deyal.jpeg'
import book4 from '../../../assets/images/books/ekattor-din.png'
import book5 from '../../../assets/images/books/greateness.png'
import book6 from '../../../assets/images/books/kalbela.png'
import book7 from '../../../assets/images/books/amm.jpg'
import book8 from '../../../assets/images/books/himu.jpeg'
import { Link } from 'react-router-dom';

const FeaturedBooks = () => {
    return (
        <div className='max-w-4xl mx-auto text-center my-9 lg:my-16 px-4 lg:px-9'>
            <div className='w-fit mx-auto mb-9 lg:mb-10'>
                <h1 className='lg:text-xl font-bold text-[#0D9276]'>প্রদর্শিত বইসমূহ</h1>
                <h2 className='border-[#0D9276] border-2 mx-9 lg:mx-12 my-2 rounded-full border-opacity-90'></h2>
            </div>
            <div className='flex flex-col justify-center lg:grid lg:grid-cols-4 items-center gap-12'>
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book1} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book2} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book3} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book4} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book5} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book6} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book7} alt="" />
                <img className='h-56 w-40 hover:scale-105 duration-200' src={book8} alt="" />
            </div>
            <Link to={'/books/category/all'} className='px-6 py-3 border hover:bg-[#0D9276] mt-10 hover:text-white duration-300 text-[#0D9276] bg-white border-[#0D9276] inline-block'>
                সকল বই
            </Link>
        </div>
    );
};

export default FeaturedBooks;