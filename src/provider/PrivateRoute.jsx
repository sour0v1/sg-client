import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);

    if (loading) {
        return (
            <div className='w-full m-auto flex flex-col justify-center items-center gap-1 h-screen'>
                <span className="loading loading-spinner text-white bg-[#0D9276] text-2xl"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;