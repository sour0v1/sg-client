import React, { useContext, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase.config';

const Login = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)
    const [open, setOpen] = useState(false);
    const { signInWithEmail } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [loading1, setLoading1] = useState(null);
    // console.log(errorMessage);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setLoading(true);
        // console.log(data);
        setErrorMessage(' ');
        signInWithEmail(data?.email, data?.password)
            .then((result) => {
                // console.log(result?.user)
                setLoading(false);
                navigate('/')
                Swal.fire({
                    title: "সফলভাবে লগ ইন হয়েছে!",
                    icon: "success",
                    confirmButtonColor: '#0D9276'
                });
            })
            .catch(error => {
                // console.log(error)
                if (error?.message.includes('auth/invalid-credential')) {
                    setLoading(false);
                    setErrorMessage('Invalid  user or wrong password');
                }
                else if (error?.message.includes('temporarily disabled due to many failed login attempts')) {
                    setLoading(false);
                    setErrorMessage('Temporarily disabled due to many failed login attempts.Try later');
                }
                // setErrorMessage(error?.message);
            })
    }
    // password reset
    const handlePassReset = (event) => {
        event.preventDefault();
        setLoading1(true);
        const form = event.target;
        const email = form.email.value;
        // console.log(email);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setLoading1(false);
                setEmailError('Email sent');
                form.reset();

            })
            .catch(error => {
                setLoading1(false);
                setEmailError(error?.message);
                form.reset();
            })
    }
    // console.log(errorMessage);
    // if (loading) {
    //     return <div className='lg:w-2/3 m-auto flex flex-col justify-center items-center gap-1 h-screen'>
    //         <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
    //     </div>
    // }
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center bg-[#0D9276]'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handlePassReset} className='space-y-2'>
                        <p className='text-[#0D9276]'>আপনার ইমেইল : </p>
                        <div className='w-full flex justify-center items-center gap-2'>
                            <input className='bg-gray-200 text-[#0D9276] py-2 w-2/3 px-3 outline-[#0D9276]' type="email" name='email' placeholder='ইমেইল' required />

                            <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 py-2 text-white w-1/3 rounded' type="submit" value={'ইমেইল পান'} />
                        </div>

                    </form>

                    {
                        loading1 &&
                        <div className='w-full m-4 flex flex-col justify-center items-center gap-1'>
                            <span className="loading loading-spinner text-[#0D9276] text-2xl"></span>
                        </div>
                    }
                    {
                        emailError && <p className='text-[#0D9276] text-center my-4'>{emailError}</p>
                    }


                </div>
            </dialog>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/4 flex flex-col justify-center items-center gap-4 p-6 lg:border lg:rounded-xl lg:shadow-lg lg:shadow-white'>
                <Link to='/'>
                    <div className='btn m-6 w-fit'>
                        <span className='text-[#0D9276]'><FiArrowLeft /></span>
                        <span className='text-[#0D9276]'>হোমে ফিরে যান</span>
                    </div>
                </Link>
                {
                    errorMessage && <h2 className='text-white text-center'>{errorMessage}</h2>
                }

                <div className='w-full'>
                    <input {...register('email', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3 text-[#0D9276]' type="email" placeholder='ইমেইল' />
                    {errors?.email && <span className='text-white'>ইমেইল প্রয়োজন</span>}
                </div>
                <div className='w-full space-y-3'>
                    <div className='space-y-3 w-full relative'>
                        <input {...register('password', { required: true })} className='bg-gray-100 py-2 w-full outline-none px-3 text-[#0D9276]' type={!open ? 'password' : 'text'} placeholder='পাসওয়ার্ড' />
                        <span onClick={() => setOpen(!open)} className='absolute top-0 right-4 text-[#0D9276]'>{!open ? <IoEyeOffOutline /> : <IoEyeOutline />}</span>
                        {errors?.password && <span className='text-white'>পাসওয়ার্ড প্রয়োজন</span>}
                    </div>
                    <p className='' onClick={() => { document.getElementById('my_modal_3').showModal(); setEmailError(null) }}><Link className='text-white underline'>পাসওয়ার্ড ভুলে গিয়েছেন?</Link></p>
                </div>
                {
                    loading ?
                        <p className='border w-full py-2 text-center'><span className="loading loading-spinner text-white text-xl"></span></p> :
                        <input className='border hover:bg-white hover:text-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 text-white' type="submit" value="লগ ইন" />
                }
                <p className='text-white'>এখানে নতুন? <Link className=' underline' to={'/registration'}>রেজিস্টার</Link></p>
            </form>
        </div>
    );
};

export default Login;