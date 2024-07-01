import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
console.log(import.meta.env.VITE_IMAGE_API_KEY)
const AddMember = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data)
        // image hosting to imagebb
        let picture = 'https://i.ibb.co/n1q3y5s/profile-avatar.jpg'

        const imageFile = { image: data?.photo[0] }
        console.log(imageFile)
        if (data?.photo[0]) {
            const imageRes = await axios.post(`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMAGE_API_KEY}`, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            picture = imageRes?.data?.data?.display_url;
            console.log(imageRes.data);
        }

        const name = data?.name;
        const photo = picture;
        const occupation = data?.occupation;
        const memberCategory = data?.category;
        const memberInfo = {
            name, photo, occupation, memberCategory
        }

        const res = await axiosSecure.post(`/add-member`, memberInfo)
        console.log(res?.data);
        if (res?.data.insertedId) {
            Swal.fire({
                title: "Success",
                text: `সফলভাবে অন্তর্ভুক্ত হয়েছে`,
                icon: "success",
                confirmButtonColor : '#0D9276'
            });
            setLoading(false);
        }


    }
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:w-2/3 shadow-lg p-6 space-y-3 mx-auto'>
                {/* <div className='flex flex-col gap-1'>
                    <label htmlFor=""></label>
                    
                </div> */}
                <input {...register('name', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='নাম' />
                {errors?.name && <span className='text-red-500 mt-1 inline-block'>নাম আবশ্যক</span>}
                <input {...register('photo', { required: false })} className='py-3 bg-gray-100 text-gray-500 outline-none px-3 w-full' type="file" placeholder='ছবি' />
                <input {...register('occupation', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='পেশা' />
                {errors?.occupation && <span className='text-red-500 mt-1 inline-block'>পেশা নির্বাচন করুন</span>}
                <select {...register('category', { required: true })} className='py-3 bg-gray-100 outline-none px-3 w-full'>
                    <option className='bg-gray-200' value="">ক্যাটেগরি</option>
                    <option value={'executive'}>কার্যকরী সদস্য</option>
                    <option value={'general'}>সদস্য</option>
                    <option value={'reader'}>পাঠক সদস্য</option>
                    <option value={'advisory'}>উপদেষ্টা মণ্ডলীর সদস্য</option>
                    <option value={'lifetime'}>আজীবন সদস্য</option>
                </select>
                {errors?.category && <span className='text-red-500 mt-1 inline-block'>ক্যাটেগরি নির্বাচন করুন</span>}
                <input className='py-3 bg-[#0D9276] bg-opacity-30 opacity-80 hover:bg-opacity-80 hover:text-white hover:opacity-100 font-medium outline-none px-3 w-full' type="submit" value={'Add'} />

            </form>
            <div onClick={() => reset()} className='lg:w-2/3 text-center my-3 mx-auto'>
                <button className='py-3 px-4 bg-gray-300'>Reset</button>
            </div>
        </div>
    );
};

export default AddMember;