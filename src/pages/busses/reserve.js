import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import BusReserve from '../../../components/Buses/BusReserve/BusReserve';
import dynamic from "next/dynamic";
const reserve = () => {
    return (
        <div>
            <Nav/>
           <BusReserve/>
            <Footer/>
        </div>
    );
};
export default dynamic(() => Promise.resolve(reserve), { ssr: false });