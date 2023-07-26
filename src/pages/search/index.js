import React from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import HotelSearch from '../../../components/SearhPage/HotelSearch';

const SearcPage = () => {
     return (
          <div>
               <TopBar/>
               <Header/>
               <HotelSearch/>
               <Footer/>
          </div>
     );
};

export default SearcPage;