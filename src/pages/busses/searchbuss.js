import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import ToursSearch from '../../../components/Tour/ToursSearch/ToursSearch';
import Footer from '../../../components/Footer/Footer';
import SearchBus from '../../../components/Buses/SearchBus/SearchBus';

const searchbuss = () => {
    return (
        <div>
             <Nav/>
            <SearchBus/>
            <Footer/>

        </div>
    );
};

export default searchbuss;