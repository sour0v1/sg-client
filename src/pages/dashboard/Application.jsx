import React from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../../public/sg-logo.jpg'

const Application = () => {
    const { id } = useParams();
    return (
        <div className='h-full lg:w-[600px] mx-auto relative'>

            <h1 className=''>Application {id}</h1>
            <div className='text-center space-y-2 border-b-2 py-4 border-[#0D9276]  border-opacity-80'>
                <h2 className='text-xl font-bold text-[#0D9276]'>স্বপ্নাশ্রয় গ্রন্থাগার</h2>
                <p className='text-[#0D9276]'>স্থাপিত - ১ মে, ২০১১ খ্রি., রাবান, পলাশ, নারসিংদী।</p>
                <p className='text-[#0D9276]'>গ.প্র.অধি. রেজি নং - ০৭</p>
            </div>
            <div className='flex justify-end items-center my-2'>
                <img className='border w-36 h-40' src='' alt="photo" />
            </div>

            <img className='absolute w-2/3 inset-0 m-auto opacity-5' src={logo} alt="" />
        </div>
    );
};

export default Application;