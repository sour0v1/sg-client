import React, { useContext, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user)
    const [open, setOpen] = useState(false);
    const { signInWithEmail } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    console.log(errorMessage);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        setErrorMessage(' ');
        signInWithEmail(data?.email, data?.password)
            .then((result) => {
                console.log(result?.user)
                setLoading(false);
                navigate('/')
                Swal.fire({
                    title: "Success",
                    text: "Logged in successfully!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
                if (error?.message.includes('auth/invalid-credential')) {
                    setLoading(false);
                    setErrorMessage('Invalid  user or wrong password');
                }
                else if(error?.message.includes('temporarily disabled due to many failed login attempts')){
                    setLoading(false);
                    setErrorMessage('Temporarily disabled due to many failed login attempts.Try later');
                }
                // setErrorMessage(error?.message);
            })
    }
    // console.log(errorMessage);
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
                {
                    errorMessage && <h2 className='text-red-500 text-center'>{errorMessage}</h2>
                }

                <div className='w-full'>
                    <input {...register('email', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3' type="email" placeholder='Email' />
                    {errors?.email && <span className='text-red-500'>Email required</span>}
                </div>
                <div className='relative w-full'>
                    <input {...register('password', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3' type={!open ? 'password' : 'text'} placeholder='Password' />
                    {errors?.password && <span className='text-red-500'>Password required</span>}
                    <span onClick={() => setOpen(!open)} className='absolute top-3 right-4'>{!open ? <IoEyeOffOutline /> : <IoEyeOutline />}</span>
                </div>
                <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 text-white' type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;