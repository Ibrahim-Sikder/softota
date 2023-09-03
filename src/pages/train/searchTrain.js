import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import ToursSearch from '../../../components/Tour/ToursSearch/ToursSearch';
import Footer from '../../../components/Footer/Footer';

const searchTrain = () => {
    return (
        <div>
             <Nav/>
            <ToursSearch/>
            <Footer/>
        </div>
    );
};

export default searchTrain;