import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import moment from 'moment-timezone';

const ReqBooks = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookId, setBookId] = useState(null);
    const [message, setMessage] = useState(null);
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: requestedBooks, isFetching, refetch } = useQuery({
        queryKey: ['reqBooks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-req-books`);
            return res.data;
        }
    })
    // console.log(requestedBooks);
    // form handle
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        // setMessage(null);
        setLoading(true);
        const takenDate = moment().tz('Asia/Dhaka').format('YYYY-MM-DD');
        const givenDate = data?.givenDate;

        const res = await axiosSecure.post(`/confirm-req-book?tDate=${takenDate}&gDate=${givenDate}&id=${bookId}`)
        // console.log(res.data);
        if (res.data?.modifiedCount) {
            setMessage('সফল হয়েছে!');
            refetch();
            reset();
            setLoading(false);
        }

    }

    return (
        <div>
            {
                requestedBooks?.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#0D9276] text-white'>
                                <tr>
                                    <th>বই নং</th>
                                    <th>বইয়ের নাম</th>
                                    <th>লেখকের নাম</th>
                                    <th>পাঠকের নাম</th>
                                    <th>ঠিকানা</th>
                                    <th>মোবাইল</th>
                                    <th>তারিখ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    requestedBooks?.map((book, idx) =>
                                        <tr key={idx} className={`bg-base-200 border-b-2 border-white hover:bg-white ${book?.takenDate && 'hidden'}`}>
                                            <th>{book?.bookNo}</th>
                                            <td>{book?.bookName}</td>
                                            <td>{book?.author}</td>
                                            <td>{book?.name}</td>
                                            <td>{book?.address}</td>
                                            <td>{book?.phone}</td>
                                            <td>{book?.date}</td>
                                            <td>
                                                {
                                                    loading ?
                                                        <button className='text-white text-center'>
                                                            <span className="loading loading-spinner loading-md"></span>
                                                        </button> :
                                                        <button onClick={() => { setOpen(true); setBookId(book?._id); setMessage(null); reset(); }} className='underline hover:text-[#0D9276]'>নিশ্চিত করুন</button>

                                                }
                                            </td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div> :
                    isFetching ?
                        <p className='text-[#0D9276] text-center'>loading...</p> :
                        <p className='text-[#0D9276] text-center'>দুঃখিত! কোন বই পাওয়া যায়নি।</p>
            }
            {/* confirm book */}
            {
                open &&
                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
                    <div className='bg-white p-4 lg:p-9 w-full m-3 lg:w-1/3 relative rounded-lg space-y-6'>
                        <button onClick={() => setOpen(false)} className='rounded-full absolute top-3 right-3 text-xl hover:bg-gray-100 p-2 text-[#0D9276]'><RxCross1 /></button>

                        <form onSubmit={handleSubmit(onSubmit)} className='mt-9 space-y-4'>
                            {/* <div className='space-y-1'>
                                <span>নেয়ার তারিখ:</span>
                                <input type="date" className='py-2 px-3 bg-base-200 w-full outline-none' />
                            </div> */}
                            <div className='space-y-1'>
                                <span>দেয়ার তারিখ:</span>
                                <input {...register('givenDate', { required: true })} type="date" className='py-2 px-3 bg-base-200 w-full outline-none' />
                                {errors?.givenDate && <span className='text-red-500'>তারিখ আবশ্যক</span>}
                            </div>
                            <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 px-3 rounded-lg text-white' type="submit" value={'নিশ্চিত করুন'} />
                        </form>
                        {
                            message && <p className='text-[#0D9276] text-center'>{message}</p>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default ReqBooks;