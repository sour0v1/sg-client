import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UserProfileEdit = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [changed, setChanged] = useState(false);
    const [message, setMessage] = useState(null);
    const [pending, setPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { data: userInfo } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-user-info?email=${user?.email}`)
            return res.data;
        }
    })
    // console.log(userInfo);
    // handle form
    const handleProfileEdit = async (e) => {
        e.preventDefault();
        setPending(true);
        setMessage(null);
        setErrorMessage(null);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const profession = form.prof.value;
        const mobile = form.mobile.value;
        const address = form.address.value;
        // console.log();
        const info = {
            name, email, profession, mobile, address
        }

        const res = await axiosSecure.post(`/edit-profile`, info)
        // console.log(res.data);
        if (res.data?.modifiedCount) {
            setPending(false);
            setMessage('সফলভাবে আপডেট হয়েছে')
        }
        if (!res.data?.modifiedCount) {
            setPending(false);
            setErrorMessage('দুঃখিত, আপনি কোন পরিবর্তন করেননি।')
        }
    }
    // console.log(message, errorMessage)
    // console.log(changed);
    return (
        <div className='w-full lg:w-1/2 mx-auto shadow-lg p-6 flex flex-col justify-center items-start gap-3 relative'>
            <form onChange={() => setChanged(true)} onSubmit={handleProfileEdit} className='w-full space-y-3'>
                <div className='w-full flex flex-col justify-center items-start gap-1 text-gray-500'>
                    <span className=''>নাম</span>
                    <input className='bg-base-200 py-2 px-3 w-full outline-none' disabled type="text" name="name" defaultValue={userInfo?.name} />
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-1 text-gray-500'>
                    <span className=''>ইমেইল</span>
                    <input className='bg-base-200 py-2 px-3 w-full outline-none' disabled type="text" name="email" defaultValue={userInfo?.email} />
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-1 text-gray-500'>
                    <span className=''>পেশা</span>
                    <input className='bg-base-200 py-2 px-3 w-full outline-none' type="text" name="prof" defaultValue={userInfo?.profession} />
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-1 text-gray-500'>
                    <span className=''>মোবাইল নম্বর</span>
                    <input className='bg-base-200 py-2 px-3 w-full outline-none' type="text" name="mobile" defaultValue={userInfo?.mobile} />
                </div>
                <div className='w-full flex flex-col justify-center items-start gap-1 text-gray-500'>
                    <span className=''>ঠিকানা</span>
                    <input className='bg-base-200 py-2 px-3 w-full outline-none' type="text" name="address" defaultValue={userInfo?.address} />
                </div>
                {
                    pending ?
                        <p className='border w-full py-2 text-center bg-[#0D9276] text-white'><span className="loading loading-spinner text-white text-xl"></span></p> :
                        <input className={`py-2 px-3 w-full bg-[#0D9276] text-white bg-opacity-80 ${changed && 'bg-opacity-100'}`} disabled={changed ? false : true} type="submit" value={'Save'} />
                }
                {
                    message && <p className='text-center text-[#0D9276] pt-3'>{message}</p>
                }
                {
                    errorMessage && <p className='text-center text-red-500 pt-3'>{errorMessage}</p>
                }

            </form>
        </div>
    );
};

export default UserProfileEdit;