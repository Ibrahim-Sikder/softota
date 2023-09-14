import React from 'react';
import style from './checkout.module.css'
import Nav from '../../../../components/NavBarr/Nav';
import { Footer } from 'react-day-picker';
const index = () => {
    return (
        <main>
            <Nav/>
            <h3>Tour checkout page </h3>
            <Footer/>
        </main>
    );
};

export default index;