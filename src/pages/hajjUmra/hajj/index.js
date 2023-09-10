import React from 'react';
import HajjPackage from '../../../../components/Umra/HajjPackage/HajjPackage';
import Footer from '../../../../components/Footer/Footer';
import Nav from '../../../../components/NavBarr/Nav';
import dynamic from "next/dynamic";
const index = () => {
    return (
        <div>
            <Nav/>
            <HajjPackage/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });