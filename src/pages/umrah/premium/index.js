import React from 'react';
import UmrahLayout from '../../../../components/UmrahHajj/Umrah/UmrahLayout';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umra2.jpg";
const Premium = () => {
    return (
        <UmrahLayout>
           <HajjUmrahCard
            img={umrah}
            heading="Premium Umrah Package 2023"
            subheading=""
            title="Premium Umrah Package 2023 - 2024 from Bangladesh"
          ></HajjUmrahCard>
          
        </UmrahLayout>
    );
};

export default Premium;