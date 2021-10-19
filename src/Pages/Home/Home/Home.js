import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Discuss from '../Discuss/Discuss';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <Discuss></Discuss>
        </div>
    );
};

export default Home;