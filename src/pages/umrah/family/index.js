import React from 'react';
import UmrahLayout from '../../../../components/UmrahHajj/Umrah/UmrahLayout';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umrah6.jpg";
const index = () => {
    return (
        <UmrahLayout>
        <HajjUmrahCard
           img={umrah}
           heading="Family Umrah Package 2023"
           subheading=""
           title=" Family People Umrah Package from Bangladesh"
       ></HajjUmrahCard>
       
     </UmrahLayout>
    );
};

export default index;