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
            <Carousel showStatus = {false} showThumbs = {false} autoPlay = {true} infiniteLoop = {true}>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library1})` }}>
                    <div className="w-full h-full bg-black bg-opacity-10 flex justify-center items-center">
                        {/* text here */}
                        {/* <h2 className="text-4xl font-extrabold text-white opacity-60">স্বপ্নাশ্রয় গ্রন্থাগারে, স্বাগতম</h2> */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library3})` }}>
                    <div className="w-full h-full bg-black bg-opacity-0">
                        {/* text here */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library2})` }}>
                    <div className="w-full h-full bg-black bg-opacity-0">
                        {/* text here */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library4})` }}>
                    <div className="w-full h-full bg-black bg-opacity-0">
                        {/* text here */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library5})` }}>
                    <div className="w-full h-full bg-black bg-opacity-0">
                        {/* text here */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library7})` }}>
                    <div className="w-full h-full bg-black bg-opacity-0">
                        {/* text here */}
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;