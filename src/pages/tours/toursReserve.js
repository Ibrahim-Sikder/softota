import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import ToursReserve from '../../../components/Tour/ToursReserve/ToursReserve';

const toursReserve = () => {
    return (
        <div>
            <Nav/>
            <ToursReserve/>
            <Footer/>
        </div>
    );
};

export default toursReserve;