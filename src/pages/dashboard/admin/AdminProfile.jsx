import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const AdminProfile = () => {
    const {loading} = useContext(AuthContext);

    

    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <h1>Admin Profile Page</h1>
        </div>
    );
};

export default AdminProfile;