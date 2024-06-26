import React from 'react';

const AddMember = () => {
    return (
        <div>
            <form className='lg:w-2/3 shadow-lg p-6 space-y-3 mx-auto'>
                {/* <div className='flex flex-col gap-1'>
                    <label htmlFor=""></label>
                    
                </div> */}
                <input className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='নাম' />
                <input className='py-3 bg-gray-100 text-gray-500 outline-none px-3 w-full' type="file" placeholder='ছবি' />
                <input className='py-3 bg-gray-100 outline-none px-3 w-full' type="text" placeholder='পেশা' />
                <select className='py-3 bg-gray-100 outline-none px-3 w-full' name="" id="">
                    <option className='bg-gray-200' value="category">ক্যাটেগরি</option>
                    <option>কার্যকরী সদস্য</option>
                    <option>সদস্য</option>
                    <option>পাঠক সদস্য</option>
                    <option>উপদেষ্টা মণ্ডলীর সদস্য</option>
                    <option>আজীবন সদস্য</option>
                </select>
                <input className='py-3 bg-[#0D9276] bg-opacity-30 opacity-80 hover:bg-opacity-80 hover:text-white hover:opacity-100 font-medium outline-none px-3 w-full' type="submit" value={'Add'} />

            </form>
        </div>
    );
};

export default AddMember;