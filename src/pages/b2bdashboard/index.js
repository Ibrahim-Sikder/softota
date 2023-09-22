import React from 'react';
import B2BdashboardLayout from '../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout';
import MoveText from '../../../components/UserDashBoard/MoveText/MoveText';
import HeroBox from '../../../components/UserDashBoard/HeroBox';
import TourDestination from '../../../components/Tour/TourDestination';
import DisCount from '../../../components/DisCount/DisCount';
import Travel from '../../../components/Travel/Travel';
import Customer from '../../../components/Customer/Customer';

const index = () => {
    return (
        <B2BdashboardLayout>
            <MoveText/>
            <HeroBox/>
            <TourDestination/>
            <DisCount/>
            <Travel/>
            <Customer/>
        </B2BdashboardLayout>
    );
};

export default index;