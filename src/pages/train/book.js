import React from 'react';
import Nav from '../../../components/NavBarr/Nav';

import TrainBook from '../../../components/Train/TrainBook/TrainBook';
import Footer from '../../../components/Footer/Footer';

const book = () => {
    return (
        <div>
               <Nav/>
                <TrainBook/>
            <Footer/>
        </div>
    );
};

export default book;