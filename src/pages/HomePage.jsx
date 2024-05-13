import React from 'react';
import Hero from '../components/Hero';
import Provides from '../components/Provides';
import PopularProducts from '../components/PopularProducts';

const HomePage = () => {
    return (
        <section>
            <Hero />
            <Provides />
            <PopularProducts />
        </section>
    );
};

export default HomePage;