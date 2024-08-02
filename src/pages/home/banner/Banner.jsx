import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import library1 from '../../../assets/images/library1.jpg'
import library2 from '../../../assets/images/sg-1.jpg'
import library3 from '../../../assets/images/sg-5.jpg'
import library4 from '../../../assets/images/sg-4.jpg'
import library5 from '../../../assets/images/sg-3.jpg'
import library6 from '../../../assets/images/sg-2.jpg'
import library7 from '../../../assets/images/sg-7.jpg'


const Banner = () => {
    return (
        <div className="z-10 relative">
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library1})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot; পৃথিবীতে সকলের চেয়ে বড়ো জিনিস আমরা যাহা কিছু পাই তাহা বিনামূল্যেই পাইয়া থাকি , তাহার জন্য দরদস্তুর করিতে হয় না । মূল্য চুকাইতে হয় না বলিয়াই জিনিসটা যে কত বড়ো তাহা আমরা সম্পূর্ণ বুঝিতেই পারি না &quot;</h2>
                            <p className="text-right text-white text-sm opacity-70 my-4 w-full">- রবীন্দ্রনাথ ঠাকুর</p>
                        </div>

                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library3})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot; বল বীর— <br />
                                বল উন্নত মম শির! <br />
                                শির নেহারি আমারি, নত-শির ওই শিখর হিমাদ্রির! &quot;</h2>
                            <p className="text-right text-sm text-white opacity-70 my-4 w-full">- কাজী নজরুল ইসলাম</p>
                        </div>

                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library2})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot; জন্মিলে মরিতে হবে, অমর কে কোথা কবে? চিরস্থির কবে নীর হায়রে জীবন নদে? &quot;</h2>
                            <p className="text-right text-white text-sm opacity-70 my-4 w-full">- মাইকেল মদুসূধন দত্ত </p>
                        </div>

                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library4})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot; জীবন চলার পথে বাঁধা আসতেই পারে তাই বলে থেমে যাওয়ার কোনো অবকাশ নেই। যেখানে বাঁধা আসবে সেখান থেকেই আবার শুরু করতে হবে। &quot;</h2>
                            <p className="text-right text-white text-sm opacity-70 my-4 w-full">- রেদোয়ান মাসুদ</p>
                        </div>

                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library5})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot; তোমরা আমাকে শিক্ষিত মা দাও, আমি তোমাদের শিক্ষিত জাতি দেবো। &quot;</h2>
                            <p className="text-right text-white text-sm opacity-70 my-4 w-full">- নেপোলিয়ন বোনাপার্ট</p>
                        </div>

                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library7})` }}>
                    <div className=" bg-black w-full h-full bg-opacity-60 px-9 lg:px-32">
                        {/* text here */}
                        <div className="flex flex-col h-full justify-center items-center">
                            <h2 className="text-sm lg:text-2xl font-extrabold text-white opacity-70 text-left border-l-4 pl-2">&quot;  শিক্ষার মূল উদ্দেশ্য হলো একটা শুন্য মস্তিষ্ককে একটা উন্মুক্ত মস্তিষ্ক দ্বারা প্রতিস্থাপিত করা। &quot;</h2>
                            <p className="text-right text-white text-sm opacity-70 my-4 w-full">- ম্যালকম এস. ফোর্বস</p>
                        </div>

                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;