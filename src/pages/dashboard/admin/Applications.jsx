import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const Applications = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const { data: applications, isPending } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-applications?page=${currentPage}&limit=10`)
            return res?.data;
        }
    })

    // console.log(applications?.result)
    const totalPage = applications?.totalPage;
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
    if (isPending) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications?.result?.map((application, index) =>
                                <tr key={index}>

                                    <th>{index + 1}</th>
                                    <td>{application?.name}</td>
                                    <td><img className='lg:w-24 lg:h-24' src={application?.photo} alt="photo" /></td>
                                    <td>{application?.mobile}</td>
                                    <td className=''><Link to={application?._id} className='btn'>View Application</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {/* handle pagination */}
            <div className='w-full flex justify-center items-center gap-9 my-6'>
                <button disabled={currentPage <= 1} onClick={handlePrevPage} className='btn'>Prev</button>
                <button disabled={totalPage === currentPage} onClick={handleNextPage} className='btn'>Next</button>
            </div>
        </div>
    );
};

export default Applications;