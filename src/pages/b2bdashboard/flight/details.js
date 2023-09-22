import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BFlightDetails from "../../../../components/UserDashBoard/Flight/B2BFlightDetails";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Book = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2BFlightDetails />
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });
