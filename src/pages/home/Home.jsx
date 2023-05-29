import React from 'react';
import './style.scss'
import HeroBanner from "./heroBanner/HeroBanner.jsx";
import Trending from "./trending/Trending.jsx";
const Home = () => {
    return (
        <div className={'homePage'}>
            <HeroBanner />
            <Trending />
        </div>
    );
};

export default Home;
