import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import BusBook from '../../../components/Buses/BusBook/BusBook';

const book = () => {
    return (
        <div>
            <Nav/>
            <BusBook/>
            <Footer/>
        </div>
    );
};

export default book;