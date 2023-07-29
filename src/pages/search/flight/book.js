import React from 'react';
import TopBar from '../../../../components/TopBar/TopBar';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import FlightBook from '../../../../components/SearhPage/FlightBook/FlightBook';
import dynamic from "next/dynamic";
import Nav from '../../../../components/NavBarr/Nav';
const book = () => {
     return (
          <div>
               {/* <TopBar/>
               <Header/> */}
               <Nav/>
               <FlightBook/>
               <Footer/>
          </div>
     );
};

export default dynamic (() => Promise.resolve(book), {ssr: false})