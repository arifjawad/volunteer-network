import React from 'react';
import Header from '../../components/sections/header';
import Footer from '../../components/sections/footer';
import Events from '../Events/Events';


const Home = () => {
    return (
        <>
            <Header></Header>
            <Events></Events>
            <Footer></Footer>
        </>
    );
};

export default Home;