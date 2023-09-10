import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import PlatinumUmrahPackage from '../../../../components/Umra/UmrahPackage/PlatinumUmrahPackage';

const platinum = () => {
    return (
        <div>
             <Nav/>
               <PlatinumUmrahPackage/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(platinum), { ssr: false });