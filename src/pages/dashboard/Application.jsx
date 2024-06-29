import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../../public/sg-logo.jpg'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Application = () => {
    const {loading, setLoading} = useContext(AuthContext);
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: application, isPending } = useQuery({
        queryKey: ['application'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-application?id=${id}`)
            return res?.data;
        }
    })
    console.log(application)

    const memberInfo = {
        name: application?.name,
        photo: application?.photo,
        occupation: application?.occupation,
        memberCategory: 'reader'

    }

    const handleApplication = () => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, নিশ্চিত"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                const res = await axiosSecure.post(`/add-reader-member?id=${application?._id}`, memberInfo);
                if (res?.data?.deletedCount) {
                    Swal.fire({
                        title: "সফল",
                        text: `${application?.name} পাঠক সদস্য হিসেবে অন্তর্ভুক্ত হয়েছে`,
                        icon: "success"
                    });
                    setLoading(false);
                }
            }
        });

    }
    if (isPending || loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
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
            <button onClick={handleApplication} className='py-3 bg-[#0D9276] my-5 bg-opacity-80 hover:bg-opacity-100 text-white font-medium outline-none px-3 w-full'>পাঠক সদস্য নিশ্চিত করুন</button>

            <img className='absolute w-2/3  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5' src={logo} alt="" />
        </div>
    );
};

export default Application;