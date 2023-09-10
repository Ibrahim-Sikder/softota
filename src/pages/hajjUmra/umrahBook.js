import React from 'react';
import UmrahBook from '../../../components/Umra/UmrahBook/UmrahBook';
import Nav from '../../../components/NavBarr/Nav';
import Footer from '../../../components/Footer/Footer';
import dynamic from "next/dynamic";

const hajjUmrahBook = () => {
    return (
        <section>
            <Nav/>
            <UmrahBook/>
            
            <Footer/>
        </section>
    );
};

export default dynamic(() => Promise.resolve(hajjUmrahBook), { ssr: false });