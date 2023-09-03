import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import ToursReserve from '../../../components/Tour/ToursReserve/ToursReserve';
import Footer from '../../../components/Footer/Footer';

const reserve = () => {
    return (
        <div>
            <Nav/>
            <ToursReserve/>
            <Footer/>
        </div>
    );
};

export default reserve;