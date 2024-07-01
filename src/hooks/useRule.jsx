import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useRule = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: userRole } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-user?userEmail=${user?.email}`)
            return res?.data;
        },
        enabled: !!user
    })
    return userRole
};

export default useRule;