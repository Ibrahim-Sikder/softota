import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import FamilyUmrahPackage from '../../../../components/Umra/UmrahPackage/FamilyUmrahPackage';

const family = () => {
    return (
        <div>
             <Nav/>
               <FamilyUmrahPackage/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(family), { ssr: false });