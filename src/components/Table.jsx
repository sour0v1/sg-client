import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import TableBody from './TableBody';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Table = () => {
    const axiosPublic = useAxiosPublic();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(1);
    console.log(category);
    const { data } = useQuery({
        queryKey: ['books', category, currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/category/books?category=${category}&page=${currentPage}&limit=10`)
            return res.data;
        }
    })
    // console.log(data)
    const totalPage = data?.totalPage;
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>নিবন্ধন নং</th>
                            <th>বই</th>
                            <th>লেখক</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.books?.map((book, idx) => <tr key={idx} className={`${(idx + 2) % 2 === 0 && 'bg-gray-100'} text-center`}>
                                <th>{book?.bookIdentityNo}</th>
                                <td>{book?.bookName}</td>
                                <td>{book?.author}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='w-full flex justify-center items-center gap-9 my-6'>
                <button disabled ={currentPage <= 1} onClick={handlePrevPage} className='btn'>Prev</button>
                <button disabled = {totalPage === currentPage} onClick={handleNextPage} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default Table;