import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import UmrahInRamadn from '../../../../components/Umra/UmrahPackage/UmrahInRamadan';
import PremiumUmrahPackage from '../../../../components/Umra/UmrahPackage/PremiumUmrahPackage';
const premium = () => {
    return (
        <div>
             <Nav/>
               <PremiumUmrahPackage/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(premium), { ssr: false });