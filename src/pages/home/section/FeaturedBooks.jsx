import React from 'react';
import book1 from '../../../assets/images/books/ses-kobita.png'
import book2 from '../../../assets/images/books/dev.jpeg'
import book3 from '../../../assets/images/books/deyal.jpeg'
import book4 from '../../../assets/images/books/ekattor-din.png'
import book5 from '../../../assets/images/books/greateness.png'
import book6 from '../../../assets/images/books/kalbela.png'
import book7 from '../../../assets/images/books/amm.jpg'
import book8 from '../../../assets/images/books/himu.jpeg'

const FeaturedBooks = () => {
    return (
        <div className='max-w-5xl mx-auto text-center my-9 lg:my-16 px-4 lg:px-9'>
            <div className='w-fit mx-auto mb-9 lg:mb-10'>
                <h1 className='lg:text-xl font-bold text-[#0D9276]'>প্রদর্শিত বইসমূহ</h1>
                <h2 className='border-[#0D9276] border-2 mx-9 lg:mx-12 my-2 rounded-full border-opacity-90'></h2>
            </div>
            <div className='flex flex-col justify-center lg:grid lg:grid-cols-4 items-center gap-9'>
                <img className='h-60 hover:scale-105 duration-200' src={book1} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book2} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book3} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book4} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book5} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book6} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book7} alt="" />
                <img className='h-60 hover:scale-105 duration-200' src={book8} alt="" />
            </div>
        </div>
    );
};

export default FeaturedBooks;