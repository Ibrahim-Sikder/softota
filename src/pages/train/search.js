import React from 'react';
import Nav from '../../../components/NavBarr/Nav';
import TrainSearch from '../../../components/Train/TrainSearch/TrainSearch';
import Footer from '../../../components/Footer/Footer';


const search = () => {
    return (
        <main>
            <Nav/>
              <TrainSearch/>
            <Footer/>
        </main>
    );
};

export default search;