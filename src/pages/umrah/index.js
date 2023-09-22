import React from 'react';
import UmrahLayout from '../../../components/UmrahHajj/Umrah/UmrahLayout';
import HajjUmrahCard from '../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../public/assets/umrahOffer.jpg";
const Umrah = () => {
    return (
        <UmrahLayout>
        <HajjUmrahCard
        img={umrah}
        heading="Economy Umrah Package "
        subheading=""
        title="Available 7-10-14 days Umrah Packages 2023 - 2024"
      ></HajjUmrahCard>
        </UmrahLayout>
    );
};

export default Umrah;