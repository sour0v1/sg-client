import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div className='w-full lg:w-2/3 mx-auto shadow-lg p-6 flex flex-col justify-center items-center gap-3'>
            <img className='w-2/3 lg:w-1/3  h-32 rounded-md border' src={user?.photoURL} alt="profile-picture" />
            <h2>Name : <span className='font-medium'>{user?.displayName}</span></h2>
            <h2>Email : <span className='font-medium'>{user?.email}</span></h2>
        </div>
    );
};

export default UserProfile;