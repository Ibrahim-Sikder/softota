import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import Package from '../../../components/Umra/UmrahPackage/Package';

const packages = () => {
    return (
        <section>
            <Nav/>
            <Package/>
            <Footer/>
        </section>
    );
};

export default packages;