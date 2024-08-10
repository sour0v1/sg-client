import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import moment from 'moment-timezone';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const BookRequest = ({ setRequest, request, bookInfo }) => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const axiosSecure = useAxiosSecure();
    const { bookNo, bookName, author } = bookInfo;
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage(null);
        // console.log(data)
        // TODO
        const requestInfo = {
            bookNo, bookName, author, name: data?.name, address: data?.address, phone: data?.mobile, userEmail: user?.email, date: moment().tz('Asia/Dhaka').format('Do MMM YYYY, h:mm:ss A')
        }
        // console.log(requestInfo)
        const res = await axiosSecure.post('/request-book', requestInfo);
        // console.log(res?.data);
        if (res.data?.insertedId) {
            setMessage('আপনার আবেদনটি গ্রহন করা হয়েছে। অনুগ্রহ পূর্বক গ্রন্থাগার প্রাঙ্গণে এসে বইটি সংগ্রহ করবেন। ধন্যবাদ।');
            setLoading(false);
            reset();
        }

    }
    // console.log(errors);
    return (
        <>
            {
                user ?
                    <div className={`bg-white px-4 pt-12 pb-4 lg:p-9 rounded-xl relative m-2 lg:w-1/3`}>
                        <button onClick={() => setRequest(false)} className='rounded-full absolute top-3 right-3 text-xl hover:bg-gray-100 p-2 text-[#0D9276]'><RxCross1 /></button>
                        <h1>বই নং : <span className='font-bold'>{bookNo}</span></h1>
                        <h1>বইয়ের নাম : <span className='font-bold'>{bookName}</span></h1>
                        <h1>লেখক : <span className='font-bold'>{author}</span></h1>
                        <h1 className='font-bold mt-2'>আপনার সম্পর্কে :</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-1 space-y-2'>
                            <input {...register('name', { required: true, })} className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার নাম' />
                            {errors?.name && <span className='mt-1 text-red-500'>নাম আবশ্যক</span>}
                            <input {...register('address', { required: true })} className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার ঠিকানা' />
                            {errors?.name && <span className='mt-1 text-red-500'>ঠিকানা আবশ্যক</span>}
                            <input {...register('mobile', { required: true, minLength: 11, pattern: /^[0-9]+$/ })} className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার মোবাইল নম্বর' />
                            {errors?.mobile?.type === 'required' && <span className='mt-1 text-red-500'>মোবাইল নম্বর আবশ্যক</span>}
                            {errors?.mobile?.type === 'minLength' && <span className='mt-1 text-red-500'>মোবাইল নম্বর ১১ ডিজিটের হতে হবে</span>}
                            {errors?.mobile?.type === 'pattern' && <span className='mt-1 text-red-500'>মোবাইল নম্বর সংখ্যা হতে হবে</span>}
                            {
                                loading ?
                                    <p className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 px-3 rounded-lg text-white text-center'><span className="loading loading-spinner loading-md"></span></p> :
                                    <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 px-3 rounded-lg text-white' type="submit" value={'নিশ্চিত করুন'} />
                            }
                            {
                                message &&
                                <p className='text-[#0D9276] pt-4 text-center'>{message}</p>
                            }
                        </form>
                    </div> :
                    <div className={`bg-white px-4 pt-12 pb-4 lg:p-9 rounded-xl relative m-2 lg:w-1/3`}>
                        <button onClick={() => setRequest(false)} className='text-[#0D9276] rounded-full absolute top-3 right-3 text-xl hover:bg-gray-100 p-2'><RxCross1 /></button>
                        <p className='text-[#0D9276] text-center'>দুঃখিত! প্রথমে <Link className='border-b border-[#0D9276] hover:border-b-2' to={'/login'}>লগ ইন</Link> করতে হবে।</p>
                    </div>
            }
        </>
    );
};

export default BookRequest;