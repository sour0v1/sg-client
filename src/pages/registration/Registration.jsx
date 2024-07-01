import React, { useContext, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Registration = () => {
    const { user, loading, setLoading, createUserWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    console.log(user)
    const [open, setOpen] = useState(false);
    const { signInWithEmail } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);

        const imageFile = { image: data?.photo[0] }
        console.log(imageFile)

        const imageRes = await axios.post(`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMAGE_API_KEY}`, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const photo = imageRes?.data?.data?.display_url
        console.log(photo)
        const name = data?.name
        const userInfo = {
            name,
            email: data?.email,
            role: 'user'
        }

        createUserWithEmail(data?.email, data?.password)
            .then((result) => {
                console.log(result?.user)
                if (result?.user) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo
                    })
                        .then(async () => {
                            navigate('/')
                            Swal.fire({
                                title: "Success",
                                text: "Registered successfully!",
                                icon: "success",
                                confirmButtonColor: '#0D9276'
                            });
                            setLoading(false);
                            // here
                            const res = await axiosPublic.post('/user', userInfo)
                            console.log(res?.data);

                        })
                        .catch(error => {
                            console.log(error);
                            setLoading(false);
                        })
                }
            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            })
    }
    if (loading) {
        return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
        </div>
    }
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/4 flex flex-col justify-center items-center gap-4 p-6 shadow-lg'>
                <Link to='/'>
                    <div className='btn m-6 w-fit'>
                        <span><FiArrowLeft /></span>
                        <span>Back to Home</span>
                    </div>
                </Link>
                <div className='w-full'>
                    <input {...register('name', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3' type="text" placeholder='Your Full Name' />
                    {errors?.name && <span className='text-red-500'>Name required</span>}
                </div>
                <div className='space-y-1'>
                    <span>Photo</span>
                    <input {...register('photo', { required: true })} className='py-2 bg-gray-100 text-gray-500 outline-none px-3 w-full' type="file" placeholder='Your photo' />
                    {errors?.photo && <span className='text-red-500 mt-1 inline-block'>Photo required</span>}
                </div>

                <div className='w-full'>
                    <input {...register('email', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3' type="email" placeholder='Email' />
                    {errors?.email && <span className='text-red-500'>Email required</span>}
                </div>
                <div className='relative w-full'>
                    <input {...register('password', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3' type={!open ? 'password' : 'text'} placeholder='Password' />
                    {errors?.password && <span className='text-red-500'>Password required</span>}
                    <span onClick={() => setOpen(!open)} className='absolute top-3 right-4'>{!open ? <IoEyeOffOutline /> : <IoEyeOutline />}</span>
                </div>
                <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 text-white' type="submit" value="Register" />
                <p>Already registered? <Link className='text-[#0D9276] underline' to={'/login'}>Log In</Link></p>
            </form>
        </div>
    );
};

export default Registration;