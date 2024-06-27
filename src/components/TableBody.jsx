import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const TableBody = () => {
    const axiosPublic = useAxiosPublic();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(1);
    console.log(category);
    const { data } = useQuery({
        queryKey: ['books', category],
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
        <>
            {
                data?.books?.map((book, idx) => <tr key={idx} className="bg-base-200 text-center">
                    <th>{book?.bookIdentityNo}</th>
                    <td>{book?.bookName}</td>
                    <td>{book?.author}</td>
                    <td>{book?.bookCategory}</td>
                </tr>)
            }
            <tr className='text-center'>
                <td></td>
                <td><button className='inline-block mt-9 bg-gray-200 px-9 py-3'>Prev</button></td>
                <td><button className='inline-block mt-9 bg-gray-200 px-9 py-3'>Next</button></td>
                <td></td>
            </tr>
        </>
    );
};

export default TableBody;