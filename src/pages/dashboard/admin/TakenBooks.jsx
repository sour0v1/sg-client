import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TakenBooks = () => {
    const { user } = useContext(AuthContext);
    // const [loading, setLoading] = useState(false);
    // const [open, setOpen] = useState(false);
    // const [bookId, setBookId] = useState(null);
    // const [bookName, setBookName] = useState(null);
    // const [message, setMessage] = useState(null);
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: receivedBooks, isFetching, refetch } = useQuery({
        queryKey: ['reqBooks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-received-books`);
            return res.data;
        }
    })
    // console.log(receivedBooks);
    return (
        <div>
            {
                receivedBooks?.length > 0 ?
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
                                    <th>গ্রহণকারী</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    receivedBooks?.map((book, idx) =>
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
                                                {book?.receivedBy}
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

        </div>
    );
};

export default TakenBooks;