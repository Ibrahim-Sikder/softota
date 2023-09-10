import React from 'react';
import Nav from '../../../../components/NavBarr/Nav';
import Footer from '../../../../components/Footer/Footer';
import dynamic from "next/dynamic";
import ShiftingHajjPackage from '../../../../components/Umra/HajjPackage/ShiftingHajjPackage';
const shifting = () => {
    return (
        <div>
             <Nav/>
                <ShiftingHajjPackage>
                    
                </ShiftingHajjPackage>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(shifting), { ssr: false });