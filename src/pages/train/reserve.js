import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import TrainReserve from '../../../components/Train/TrainReserve/TrainReserve';
import Footer from '../../../components/Footer/Footer';
import dynamic from "next/dynamic";
const reserve = () => {
    return (
        <div>
             <Nav/>
                <TrainReserve/>
            <Footer/>
        </div>
    );
};

export default dynamic(() => Promise.resolve(reserve), { ssr: false });