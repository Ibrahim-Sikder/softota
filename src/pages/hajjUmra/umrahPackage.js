import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import Package from '../../../components/Umra/UmrahPackage/Package';
import dynamic from "next/dynamic";
const packages = () => {
    return (
        <section>
            <Nav/>
            <Package/>
            <Footer/>
        </section>
    );
};

export default dynamic(() => Promise.resolve(packages), { ssr: false });