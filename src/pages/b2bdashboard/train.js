import React from "react";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import TourDestination from "../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";
import TourHeroBox from "../../../components/UserDashBoard/TourHeroBox";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Train = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <TourHeroBox />
      <BestPlace></BestPlace>
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Train), { ssr: false });
