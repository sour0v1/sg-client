import React, { useContext, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { AuthContext } from '../provider/AuthProvider';

const Table = () => {
    const axiosPublic = useAxiosPublic();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const {loading, setLoading} = useContext(AuthContext);
    // const [totalPage, setTotalPage] = useState(1);
    // console.log(category);
    // books by category
    const { data, isPending } = useQuery({
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
    // search
    const handleSearch = async (e) => {
        const search = e.target.value;
        setSearchValue(search);
    }
    // console.log(searchValue);
    // books by search
    const { data: searchedBooks, isPending : isLoading } = useQuery({
        queryKey: ['searchedBooks', searchValue],
        queryFn: async () => {
            const res = await axiosPublic(`/search-books?searchValue=${searchValue}`)
            return res.data;
        },
        enabled: !!searchValue
    })
    // console.log('searched books - ', searchedBooks)
    // console.log('category books -', data?.books)

    if (isPending) {
        return <div className='lg:w-2/3 m-auto my-9 flex flex-col justify-center items-center gap-1 h-full'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <div className='w-full text-center'>
                <input onChange={handleSearch} className='py-3 px-3 bg-[rgb(255,125,41)] bg-opacity-10 my-6 w-full rounded-full outline-[#FF7D29] lg:w-2/3' placeholder='বই এর নাম অথবা লেখকের নাম দিয়ে সার্চ করুন' type="text" />
            </div>
            <div className="overflow-x-auto">
                {/* <h2 className='my-2 text-[#0D9276]'>মোট বই সংখ্যা : {data?.totalBooks}</h2> */}
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#0D9276]  text-white'>
                        <tr className='text-center'>
                            <th>নিবন্ধন নং</th>
                            <th>বই</th>
                            <th>লেখক</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            searchValue && searchedBooks?.map((book, idx) => <tr key={idx} className={`${(idx + 2) % 2 !== 0 && 'bg-gray-100'} text-center`}>
                                <th>{book?.bookIdentityNo}</th>
                                <td>{book?.bookName}</td>
                                <td>{book?.author}</td>
                            </tr>)
                        }
                        {
                            !searchValue && data?.books?.map((book, idx) => <tr key={idx} className={`${(idx + 2) % 2 !== 0 && 'bg-gray-100'} text-center`}>
                                <th>{book?.bookIdentityNo}</th>
                                <td>{book?.bookName}</td>
                                <td>{book?.author}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='w-full flex justify-center items-center gap-9 my-6'>
                <button disabled={currentPage <= 1} onClick={handlePrevPage} className='btn'>Prev</button>
                <button disabled={totalPage === currentPage} onClick={handleNextPage} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default Table;