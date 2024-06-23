import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import library1 from '../../../assets/images/library1.jpg'
import library2 from '../../../assets/images/library2.jpg'


const Banner = () => {
    return (
        <div className="z-10 relative">
            <Carousel showStatus = {false} showThumbs = {false} autoPlay = {true} infiniteLoop = {true}>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library1})` }}>
                    <div className="w-full h-full bg-black bg-opacity-10">
                        {/* text here */}
                    </div>
                </div>
                <div className="bg-cover bg-center h-[300px] lg:h-[600px]" style={{ backgroundImage: `url(${library2})` }}>
                    <div className="w-full h-full bg-black bg-opacity-10">
                        {/* text here */}
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;