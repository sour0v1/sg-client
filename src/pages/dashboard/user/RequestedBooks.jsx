import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const RequestedBooks = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    console.log(user);
    const axiosSecure = useAxiosSecure();
    const { data: requestedBooks, isFetching, refetch } = useQuery({
        queryKey: ['reqBooks'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requested-books?email=${user?.email}`);
            return res.data;
        }
    })
    console.log(requestedBooks);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0D9276",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, ডিলিট"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                const res = await axiosSecure.delete(`/req-delete?id=${id}`)
                console.log(res.data);
                if (res.data?.deletedCount) {
                    Swal.fire({
                        title: "ডিলিট হয়েছে!",
                        // text: "Your file has been deleted.",
                        icon: "success",

                        confirmButtonColor : '#0D9276'
                    });
                    setLoading(false);
                    refetch();
                }

            }
        });
        // 

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
                                    {/* <th>পাঠকের নাম</th>
                                    <th>ঠিকানা</th> */}
                                    <th>নেয়ার তারিখ</th>
                                    <th>দেয়ার তারিখ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    requestedBooks?.map((book, idx) =>
                                        <tr key={idx} className="bg-base-200">
                                            <th>{book?.bookNo}</th>
                                            <td>{book?.bookName}</td>
                                            <td>{book?.author}</td>
                                            {/* <td>{book?.name}</td>
                                            <td>{book?.address}</td> */}
                                            <td>-</td>
                                            <td>-</td>
                                            {
                                                loading ?
                                                    <td>
                                                        <span className='text-red-500'>deleting...</span>
                                                    </td> :
                                                    <td onClick={() => handleDelete(book?._id)}>
                                                        <span className='text-xl hover:bg-red-100 hover:text-red-500 p-2 inline-block rounded-full'><MdDelete /></span>
                                                    </td>
                                            }
                                            {/* {console.log(book)} */}
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

export default RequestedBooks;