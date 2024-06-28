import React from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../../public/sg-logo.jpg'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Application = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const {data : application} = useQuery({
        queryKey : ['application'],
        queryFn : async () => {
            const res = await axiosSecure.get(`/get-application?id=${id}`)
            return res?.data;
        }
    })
    console.log(application)
    return (
        <div className='h-fit lg:w-[600px] mx-auto my-auto relative shadow-lg p-9'>
            <div className='text-center space-y-2 border-b-2 py-4 border-black  border-opacity-80'>
                <h2 className='text-xl font-bold '>স্বপ্নাশ্রয় গ্রন্থাগার</h2>
                <p className=''>স্থাপিত - ১ মে, ২০১১ খ্রি., রাবান, পলাশ, নারসিংদী।</p>
                <p className=''>গ.প্র.অধি. রেজি নং - ০৭</p>
            </div>
            <div className='flex justify-end items-center my-2'>
                <img className='border w-36 h-36' src={application?.photo} alt="photo" />
            </div>

            {/* info */}
            <div className='space-y-4'>
                <p>নাম <span className='mx-4'>:</span>{application?.name}</p>
                <p>পিতার নাম <span className='mx-4'>:</span>{application?.fatherName}</p>
                <p>মাতার নাম <span className='mx-4'>:</span>{application?.motherName}</p>
                <p>বর্তমান ঠিকানা <span className='mx-4'>:</span>{application?.presentAddress}</p>
                <p>স্থায়ী ঠিকানা <span className='mx-4'>:</span>{application?.permanentAddress}</p>
                <p>মোবাইল নং <span className='mx-4'>:</span>{application?.mobile}</p>
                <p>রক্তের গ্রুপ<span className='mx-4'>:</span>{application?.bloodGroup}</p>
                <p>নিশ্চয়তাদানকারীর নাম<span className='mx-4'>:</span>{application?.referenceName
                }</p>
                <p>নিশ্চয়তাদানকারীর মোবাইল<span className='mx-4'>:</span>{application?.referencePhone
                }</p>
                
            </div>
            <div className='py-6'>
                আমি এই মর্মে অঙ্গীকার করছি যে, উপরিউক্ত তথ্যাবলি সঠিক এবং আমি স্বপ্নাশ্রয় গ্রন্থাগারের শর্তাবলী মেনে গ্রন্থাগার থেকে বই নিতে আগ্রহী। নির্ধারিত সময়ে বই ফেরত না দিলে, বই কাঁটাছেড়া করলে বইয়ের সমমূল্য দিতে বাধ্য থাকিব।
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="" alt="signature" />
                    <span className='border-t border-black px-3'>সভাপতি</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="" alt="signature" />
                    <span className='border-t border-black px-3'>সাধারণ সম্পাদক</span>
                </div>
            </div>
            <img className='absolute w-2/3  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5' src={logo} alt="" />
        </div>
    );
};

export default Application;