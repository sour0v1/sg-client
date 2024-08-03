import React, { useContext } from 'react';
import Banner from './banner/Banner';
import { AuthContext } from '../../provider/AuthProvider';
import FeaturedBooks from './section/FeaturedBooks';

const Home = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Banner></Banner>
            <FeaturedBooks></FeaturedBooks>
        </div>
    );
};

export default Home;