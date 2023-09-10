import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import UmrahInRamadn from '../../../../components/Umra/UmrahPackage/UmrahInRamadan';
const umrahradan = () => {
    return (
        <div>
             <Nav/>
                <UmrahInRamadn/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(umrahradan), { ssr: false });