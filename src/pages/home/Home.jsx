import React, { useContext } from 'react';
import Banner from './banner/Banner';
import { AuthContext } from '../../provider/AuthProvider';
import Section from './section/Section';

const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <Banner></Banner>
            <Section></Section>
        </div>
    );
};

export default Home;