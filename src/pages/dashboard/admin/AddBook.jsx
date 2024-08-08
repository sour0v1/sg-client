import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const AddBook = () => {
    const axiosSecure = useAxiosSecure();
    const { loading, setLoading } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        // console.log(data);
        const bookIdentityNo = data.identity;
        const bookName = data.book;
        const author = data.author;
        const bookCategory = data.category;
        const bookInfo = {
            bookIdentityNo, bookName, author, bookCategory
        }
        const res = await axiosSecure.post(`/add-book`, bookInfo)
        // console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire({
                title: "Success",
                text: `" ${bookName} " সফলভাবে অন্তর্ভুক্ত হয়েছে`,
                icon: "success",
                confirmButtonColor : '#0D9276'
            });
            setLoading(false);
        }
        else if (res.data.message) {
            Swal.fire({
                title: "দুঃখিত",
                text: `" ${bookName} " ইতোমধ্যে অন্তর্ভুক্ত করা হয়েছে`,
                icon: "warning",
                confirmButtonColor : '#0D9276'
            });
            setLoading(false);
        }


    }
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-full'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-2/3 shadow-lg rounded-md p-4 lg:p-6 space-y-3 mx-auto'>

                <input {...register('identity')} className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='নিবন্ধন নং' />
                {/* {errors.identity?.type === 'required' && <span className='text-red-500 mt-1 block'>নিবন্ধন নং আবশ্যক</span>}
                {errors.identity?.type === 'pattern' && <span className='text-red-500 mt-1 block'>নিবন্ধন নং হিসেবে সংখ্যা আবশ্যক</span>} */}
                {/* {console.log(errors)} */}
                <input {...register('book', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='বইয়ের নাম' />
                {errors.book?.type === 'required' && <span className='text-red-500 mt-1 block'>বইয়ের নাম আবশ্যক</span>}
                <input {...register('author', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='লেখকের নাম' />
                {errors.author?.type === 'required' && <span className='text-red-500 mt-1 block'>লেখকের নাম আবশ্যক</span>}
                <select {...register('category', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full'>
                    <option value="">ক্যাটেগরি</option>
                    <option value='novel'>উপন্যাস</option>
                    <option value="story">গল্প</option>
                    <option value="war">মুক্তিযুদ্ধ</option>
                    <option value="bangladesh">বাংলাদেশ</option>
                    <option value="vision">দর্শন</option>
                    <option value="drama">নাটকের বই</option>
                    <option value="essay">প্রবন্ধ</option>
                    <option value="poem">কবিতা</option>
                    <option value="scifi">সায়েন্স ফিকশন</option>
                    <option value="politics">রাজনীতি</option>
                    <option value="language">ভাষা ও অভিধান</option>
                    <option value="law">আইন ও বিচার</option>
                    <option value="english">ইংরেজি ভাষার বই</option>
                    <option value="food">রান্নাবান্না, খাদ্য ও পুষ্টি</option>
                    <option value="agro">কৃষি ও কৃষক</option>
                    <option value="history">ইতিহাস ও ঐতিহ্য</option>
                    <option value="religion">ধর্ম বিষয়ক</option>
                    <option value="adventure">রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
                    <option value="motivation">আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</option>
                    <option value="math">গণিত, বিজ্ঞান ও প্রযুক্তি</option>
                </select>
                {errors.category?.type === 'required' && <span className='text-red-500 mt-1 block'>একটি ক্যাটেগরি সিলেক্ট করুন</span>}
                <input className='py-3 bg-[#FF7D29] bg-opacity-30 opacity-80 hover:bg-opacity-80 hover:text-white hover:opacity-100 font-medium outline-none px-3 w-full' type="submit" value={'যুক্ত করুন'} />

            </form>
            <div onClick={() => reset()} className='lg:w-2/3 text-center my-3 mx-auto'>
                <button className='py-3 px-4 bg-gray-300 rounded-md'>রিসেট</button>
            </div>
        </div>
    );
};

export default AddBook;