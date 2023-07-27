import React from 'react';
import FlightSearch from '../../../components/SearhPage/FlightSearch/FlightSearch';
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const flightSearch = () => {
     return (
          <div>
               <TopBar/>
               <Header/>
              <FlightSearch/>
              <Footer/>
          </div>
     );
};

export default flightSearch;