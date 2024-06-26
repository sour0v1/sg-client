import React from 'react';

const AddBook = () => {
    return (
        <div>
            <form className='lg:w-2/3 shadow-lg p-6 space-y-3 mx-auto'>
                {/* <div className='flex flex-col gap-1'>
                    <label htmlFor=""></label>
                    
                </div> */}
                <input className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='নিবন্ধন নং' />
                <input className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='বইয়ের নাম' />
                <input className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='লেখকের নাম'/>
                <select className='py-3 bg-gray-100 outline-none px-3 w-full' name="" id="">
                    <option className='bg-gray-200' value="category">ক্যাটেগরি</option>
                    <option className={''}>উপন্যাস</option>
                    <option>গল্প</option>
                    <option>মুক্তিযুদ্ধ</option>
                    <option>বাংলাদেশ</option>
                    <option>দর্শন</option>
                    <option>নাটকের বই</option>
                    <option>প্রবন্ধ</option>
                    <option>কবিতা</option>
                    <option>সায়েন্স ফিকশন</option>
                    <option>রাজনীতি</option>
                    <option>ভাষা ও অভিধান</option>
                    <option>আইন ও বিচার</option>
                    <option>ইংরেজি ভাষার বই</option>
                    <option>রান্নাবান্না, খাদ্য ও পুষ্টি</option>
                    <option>কৃষি ও কৃষক</option>
                    <option>ইতিহাস ও ঐতিহ্য</option>
                    <option>ধর্ম বিষয়ক</option>
                    <option>রহস্য, গোয়েন্দা, ভৌতিক, থ্রিলার ও অ্যাডভেঞ্চার</option>
                    <option>আত্ম-উন্নয়ন, মোটিভেশনাল ও মেডিটেশন</option>
                    <option>গণিত, বিজ্ঞান ও প্রযুক্তি</option>
                </select>
                <input className='py-3 bg-[#FF7D29] bg-opacity-30 opacity-80 hover:bg-opacity-80 hover:text-white hover:opacity-100 font-medium outline-none px-3 w-full' type="submit" value={'Add'} />
                
            </form>
        </div>
    );
};

export default AddBook;