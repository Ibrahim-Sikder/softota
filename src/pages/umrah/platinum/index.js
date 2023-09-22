import React from 'react';
import UmrahLayout from '../../../../components/UmrahHajj/Umrah/UmrahLayout';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umrah4.webp";
const Platinum = () => {
    return (
        <UmrahLayout>
        <HajjUmrahCard
          img={umrah}
          heading="Platinum Umrah Package 2023"
          subheading=""
          title="Platinum Umrah Package 2023 - 2024 from Bangladesh"
       ></HajjUmrahCard>
       
     </UmrahLayout>
    );
};

export default Platinum;