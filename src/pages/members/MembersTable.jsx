import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../provider/AuthProvider';

const MembersTable = () => {
    const { loading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const { data: members, isPending } = useQuery({
        queryKey: ['members', category],
        queryFn: async () => {
            const res = await axiosPublic.get(`/members?category=${category}`)
            return res?.data;
        },
        enabled: !!category
    })
    const totalPage = members?.totalPage;

    // console.log(members?.result)
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
    if (isPending || loading) {
        return <div className='lg:w-2/3 m-auto my-9 flex flex-col justify-center items-center gap-1 h-full'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    members?.result.map((member, idx) =>
                        <div key={idx} className=''>
                            <img className='h-44 w-full' src={member?.photo} alt="photo" />
                            <div className='bg-[#0D9276] text-white border-t border-t-white p-2 space-y-1'>
                                <h2 className='font-medium text-center'>{member?.name}</h2>
                                <p className='text-center text-sm'>{member?.occupation}</p>
                            </div>
                        </div>)
                }
            </div>
            <div className='w-full flex justify-center items-center gap-9 my-6'>
                <button disabled={currentPage <= 1} onClick={handlePrevPage} className='btn'>Prev</button>
                <button disabled={totalPage === currentPage} onClick={handleNextPage} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default MembersTable;