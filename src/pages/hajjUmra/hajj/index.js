import React from 'react';
import HajjPackage from '../../../../components/Umra/HajjPackage/HajjPackage';
import Footer from '../../../../components/Footer/Footer';
import Nav from '../../../../components/NavBarr/Nav';

const index = () => {
    return (
        <div>
            <Nav/>
            <HajjPackage/>
            <Footer/>
        </div>
    );
};

export default index;