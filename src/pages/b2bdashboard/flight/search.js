import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import FlightSearch from "../../../../components/UserDashBoard/Flight/FlightSearch";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const flightSearch = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <FlightSearch />
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(flightSearch), { ssr: false });
