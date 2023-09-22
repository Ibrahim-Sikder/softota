import React from 'react';
import B2BdashboardLayout from '../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout';
import MoveText from '../../../../components/UserDashBoard/MoveText/MoveText';
import HotelHeroBox from '../../../../components/UserDashBoard/HotelHeroBox/HotelHeroBox';
import HotelTrending from '../../../../components/Hotel/HotelTrending/HotelTrending';
import Travel from '../../../../components/Travel/Travel';
import Customer from '../../../../components/Customer/Customer';

const Hotel = () => {
    return (
        <B2BdashboardLayout>
            <MoveText/>
            <HotelHeroBox/>
            <HotelTrending/>
            <Travel/>
            <HotelTrending />
            <Customer/>
        </B2BdashboardLayout>
    );
};

export default Hotel;