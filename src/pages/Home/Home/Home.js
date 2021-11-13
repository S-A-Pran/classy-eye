import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Testimonial></Testimonial>
            <Footer />
        </div>
    );
};

export default Home;