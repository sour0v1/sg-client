import moment from 'moment-timezone';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross1 } from 'react-icons/rx';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';

const GivenBooks = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookId, setBookId] = useState(null);
    const [bookName, setBookName] = useState(null);
    const [message, setMessage] = useState(null);
    console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: givenBooks, isFetching, refetch } = useQuery({
        queryKey: ['reqBooks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-given-books`);
            return res.data;
        }
    })
    console.log(givenBooks);
    // handle book received
    const handleBookReceived = async () => {
        setLoading(true);
        const res = await axiosSecure.post(`/book-received?id=${bookId}&name=${user?.displayName}`)
        console.log(res.data);
        if (res.data?.deletedCount) {
            setMessage('সফল হয়েছে!');
            refetch();
            setLoading(false);
        }

    }


    return (
        <div>
            {
                givenBooks?.length > 0 ?
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
                                    <th>নেয়ার তারিখ</th>
                                    <th>দেয়ার তারিখ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    givenBooks?.map((book, idx) =>
                                        <tr key={idx} className={`bg-base-200 border-b-2 border-white hover:bg-white`}>
                                            <th>{book?.bookNo}</th>
                                            <td>{book?.bookName}</td>
                                            <td>{book?.author}</td>
                                            <td>{book?.name}</td>
                                            <td>{book?.address}</td>
                                            <td>{book?.phone}</td>
                                            <td>{book?.takenDate}</td>
                                            <td>{book?.givenDate}</td>
                                            <td>
                                                <button onClick={() => { setOpen(true); setBookId(book?._id); setBookName(book?.bookName); setMessage(null); }} className='underline hover:text-[#0D9276]'>জমা নিন</button>
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

                        <div className='mt-9 space-y-4'>
                            {/* <div className='space-y-1'>
                                <span>নেয়ার তারিখ:</span>
                                <input type="date" className='py-2 px-3 bg-base-200 w-full outline-none' />
                            </div> */}
                            <div className='space-y-1'>
                                <p className='text-[#0D9276]'><span className='font-bold'>{bookName}</span> বইটি <span className='font-bold'>{user?.displayName}</span> এর কাছে জমা দেয়া হয়েছে।</p>
                            </div>
                            {
                                loading ?
                                    <button className='text-white text-center bg-[#0D9276] w-full py-2 px-3 rounded-lg'>
                                        <span className="loading loading-spinner loading-md"></span>
                                    </button> :
                                    <input onClick={handleBookReceived} className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 px-3 rounded-lg text-white' type="submit" value={'নিশ্চিত করুন'} />

                            }

                        </div>
                        {
                            message && <p className='text-[#0D9276] text-center'>{message}</p>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default GivenBooks;