import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { RxCross1 } from 'react-icons/rx';

const BookRequest = ({ setRequest, request, bookInfo }) => {
    const { user } = useContext(AuthContext);
    console.log(bookInfo);
    const { bookNo, bookName, author } = bookInfo;
    return (
        <div className={`bg-white px-4 pt-12 pb-4 lg:p-9 rounded-xl relative m-2 lg:w-1/3`}>
            <button onClick={() => setRequest(false)} className='rounded-full absolute top-3 right-3 text-xl'><RxCross1 /></button>
            <h1>বই নং : <span className='font-bold'>{bookNo}</span></h1>
            <h1>বইয়ের নাম : <span className='font-bold'>{bookName}</span></h1>
            <h1>লেখক : <span className='font-bold'>{author}</span></h1>
            <h1 className='font-bold mt-2'>আপনার সম্পর্কে :</h1>
            <form className='mt-1 space-y-2'>
                <input className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার নাম'/>
                <input className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার ঠিকানা'/>
                <input className='py-2 px-3 bg-gray-200 rounded-lg w-full outline-none' type="text" placeholder='আপনার মোবাইল নম্বর'/>
                <input className='bg-[#0D9276] bg-opacity-80 hover:bg-opacity-100 w-full py-2 px-3 rounded-lg text-white' type="submit" value={'নিশ্চিত করুন'} />
            </form>
        </div>
    );
};

export default BookRequest;