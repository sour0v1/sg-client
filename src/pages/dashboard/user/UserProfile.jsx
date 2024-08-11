import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: userInfo } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-user-info?email=${user?.email}`)
            return res.data;
        }
    })
    // console.log(userInfo);

    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-start items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div className='w-full lg:w-2/3 mx-auto shadow-lg p-6 flex flex-col justify-center items-start gap-4 relative text-[#0D9276]'>
            {/* <img className='w-2/3 lg:w-1/3  h-32 rounded-md border' src={user?.photoURL} alt="profile-picture" /> */}
            <Link to={'edit'} className='text-xl absolute top-6 right-6 text-[#0D9276] hover:bg-base-200 p-3 rounded-full text-center'><FaRegEdit /></Link>
            <h1 className='mx-auto w-24 h-24 border-2 text-center flex justify-center items-center text-6xl rounded-full text-white bg-[#0D9276] border-orange-600 font-semibold uppercase'>{user?.displayName[0]}</h1>
            <h2 className='font-medium'>নাম : <span className=''>{userInfo?.name}</span></h2>
            <h2 className='font-medium'>ইমেইল : <span className=''>{userInfo?.email}</span></h2>
            <h2 className='font-medium'>মোবাইল: <span className=''>{userInfo?.mobile}</span></h2>
            <h2 className='font-medium'>ঠিকানা : <span className=''>{userInfo?.address}</span></h2>
            <h2 className='font-medium'>পেশা : <span className=''>{userInfo?.profession}</span></h2>
        </div>
    );
};

export default UserProfile;