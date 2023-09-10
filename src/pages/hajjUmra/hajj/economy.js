import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import EconomyPackage from '../../../../components/Umra/HajjPackage/EconomyPackage';
const economy = () => {
    return (
        <div>
             <Nav/>
             <EconomyPackage></EconomyPackage>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(economy), { ssr: false });