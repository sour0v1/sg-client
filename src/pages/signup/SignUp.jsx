import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
// console.log(import.meta.env.VITE_IMAGE_API_KEY)
const SignUp = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    // console.log(errors)
    const onSubmit = async (data) => {
        setLoading(true);
        // console.log(data)
        // image hosting to imagebb
        const imageFile = { image: data?.photo[0] }
        // console.log(imageFile)

        const imageRes = await axios.post(`https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMAGE_API_KEY}`, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // console.log(imageRes?.data)

        const name = data?.name;
        const photo = imageRes?.data?.data?.display_url
        const fatherName = data?.fatherName;
        const motherName = data?.motherName;
        const presentAddress = data?.presentAddress;
        const permanentAddress = data?.permanentAddress;
        const mobile = data?.mobile;
        const bloodGroup = data?.bloodGroup || ' ';
        const occupation = data?.occupation;
        const referenceName = data?.referenceName;
        const referencePhone = data?.referencePhone || ' ';

        const applicantInfo = {
            name, photo, fatherName, motherName, presentAddress, permanentAddress, mobile, bloodGroup, occupation, referenceName, referencePhone
        }
        // console.log(applicantInfo)

        const res = await axiosSecure.post(`/member-application`, applicantInfo)
        // console.log(res?.data);
        if (res?.data.insertedId) {
            Swal.fire({
                title: "Success",
                text: `সফলভাবে সাবমিট হয়েছে`,
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
        <div className='max-w-5xl mx-auto mt-24'>
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box text-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">শর্তাবলী</h3>
                    <p className="py-4">১। শর্তাবলী ১</p>
                    <p className="py-4">২। শর্তাবলী ২</p>
                    <p className="py-4">৩। শর্তাবলী ৩</p>
                </div>
            </dialog>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:w-2/3 shadow-lg p-6 space-y-3 mx-auto'>
                <div className='text-center space-y-2 border-b-2 py-4 border-black  border-opacity-80'>
                    <h2 className='text-xl font-bold'>স্বপ্নাশ্রয় গ্রন্থাগার</h2>
                    <p className=''>স্থাপিত - ১ মে, ২০১১ খ্রি., রাবান, পলাশ, নারসিংদী।</p>
                    <p className=''>গ.প্র.অধি. রেজি নং - ০৭</p>
                </div>
                <div className='text-center w-full'>
                    <h2 className='underline font-bold'>পাঠক সদস্য আবেদন ফরম</h2>
                </div>
                <div className='space-y-1'>
                    <span>নাম</span>
                    <input {...register('name', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" />
                    {errors?.name && <span className='text-red-500 mt-1 inline-block'>নাম আবশ্যক</span>}
                </div>
                <div className='space-y-1'>
                    <span>ছবি</span>
                    <input {...register('photo', { required: false })} className='py-2 bg-gray-100 text-gray-500 outline-none px-3 w-full' type="file" placeholder='ছবি' />
                    {errors?.photo && <span className='text-red-500 mt-1 inline-block'>ছবি আবশ্যক</span>}
                </div>

                <div className='space-y-1'>
                    <span>পিতার নাম</span>
                    <input {...register('fatherName', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" />
                    {errors?.fatherName && <span className='text-red-500 mt-1 inline-block'>পিতার নাম আবশ্যক</span>}
                </div>

                <div className='space-y-1'>
                    <span>মাতার নাম</span>
                    <input {...register('motherName', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" />
                    {errors?.motherName && <span className='text-red-500 mt-1 inline-block'>মাতার নাম আবশ্যক</span>}
                </div>

                <div className='space-y-1'>
                    <span>বর্তমান ঠিকানা</span>
                    <input {...register('presentAddress', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='গ্রাম, ইউনিয়ন, উপজেলা, জেলা' />
                    {errors?.presentAddress && <span className='text-red-500 mt-1 inline-block'>বর্তমান ঠিকানা আবশ্যক</span>}
                </div>

                <div className='space-y-1'>
                    <span>স্থায়ী ঠিকানা</span>
                    <input {...register('permanentAddress', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='গ্রাম, ইউনিয়ন, উপজেলা, জেলা' />
                    {errors?.permanentAddress && <span className='text-red-500 mt-1 inline-block'>স্থায়ী ঠিকানা আবশ্যক</span>}
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='space-y-1 lg:w-2/3'>
                        <span>মোবাইল নং</span>
                        <input {...register('mobile', { required: true })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="number" />
                        {errors?.mobile && <span className='text-red-500 mt-1 inline-block'>মোবাইল নম্বর আবশ্যক</span>}
                    </div>
                    <div className={`space-y-1 lg:w-1/3`}>
                        <span>রক্তের গ্রুপ</span>
                        <select {...register('bloodGroup', { required: false })} className='py-2 bg-gray-100 outline-none px-3 w-full'>
                            <option className='bg-gray-200' value="">Select</option>
                            <option value="O+">O+</option>
                            <option value={'O-'}>O-</option>
                            <option value={'A+'}>A+</option>
                            <option value={'A-'}>A-</option>
                            <option value={'B+'}>B+</option>
                            <option value={'B-'}>B-</option>
                            <option value={'AB+'}>AB+</option>
                            <option value={'AB-'}>AB-</option>
                        </select>
                        {errors?.mobile ? <span className='text-red-500 mt-1 opacity-0 inline-block'>রক্তের গ্রুপ আবশ্যক</span> :
                            <span className='text-red-500 mt-1 hidden'>রক্তের গ্রুপ আবশ্যক</span>}
                    </div>
                </div>
                <div className='space-y-1'>
                    <span>পেশা</span>
                    <input {...register('occupation', { required: false })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" />
                    {errors?.occupation && <span className='text-red-500 mt-1 inline-block'>পেশা আবশ্যক</span>}
                </div>
                <div className='space-y-1'>
                    <span>নিশ্চয়তাদানকারীর নাম</span>
                    <input {...register('referenceName', { required: false })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="text" />
                    {errors?.referenceName && <span className='text-red-500 mt-1 inline-block'>নিশ্চয়তাদানকারীর নাম আবশ্যক</span>}
                </div>

                <div className='space-y-1'>
                    <span>নিশ্চয়তাদানকারীর মোবাইল</span>
                    <input {...register('referencePhone', { required: false })} className='py-2 bg-gray-100 outline-none px-3 w-full' type="number" />
                    {errors?.referencePhone && <span className='text-red-500 mt-1 inline-block'>নিশ্চয়তাদানকারীর মোবাইল নম্বর আবশ্যক</span>}
                </div>
                <div className='py-6'>
                    আমি এই মর্মে অঙ্গীকার করছি যে, উপরিউক্ত তথ্যাবলি সঠিক এবং আমি স্বপ্নাশ্রয় গ্রন্থাগারের <Link onClick={() => document.getElementById('my_modal_3').showModal()} className='underline'>শর্তাবলী</Link> মেনে গ্রন্থাগার থেকে বই নিতে আগ্রহী। নির্ধারিত সময়ে বই ফেরত না দিলে, বই কাঁটাছেড়া করলে বইয়ের সমমূল্য দিতে বাধ্য থাকিব।

                </div>

                <input className='py-3 bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 text-white font-medium outline-none px-3 w-full' type="submit" value={'Submit'} />

            </form>
            
            {/* <div onClick={() => reset()} className='lg:w-2/3 text-center my-3 mx-auto'>
                <button className='py-3 px-4 bg-gray-300'>Reset</button>
            </div> */}
        </div>
    );
};

export default SignUp;