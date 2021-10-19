import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
        </div>
    );
};

export default Home;