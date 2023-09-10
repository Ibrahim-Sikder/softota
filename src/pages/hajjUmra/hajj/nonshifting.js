import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import NonShiftingHajjPackage from '../../../../components/Umra/HajjPackage/NonShiftingHajjPackage';
const nonshifting = () => {
    return (
        <div>
             <Nav/>
             <NonShiftingHajjPackage/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(nonshifting), { ssr: false });