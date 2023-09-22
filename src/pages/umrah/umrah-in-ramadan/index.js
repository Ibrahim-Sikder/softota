import React from 'react';
import UmrahLayout from '../../../../components/UmrahHajj/Umrah/UmrahLayout';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umra3.jpeg";
const Ramadan = () => {
    return (
        <UmrahLayout>
              <HajjUmrahCard
            img={umrah}
            heading="Ramadan Umrah Package 2023"
            subheading=""
            title="Ramadan Umrah Packages 2023-24 from Dhaka Bangladesh"
          ></HajjUmrahCard>
        </UmrahLayout>
    );
};

export default Ramadan;