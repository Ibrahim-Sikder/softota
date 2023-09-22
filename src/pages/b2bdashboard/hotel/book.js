import React from "react";
import style from "../../../../components/SearhPage/HotelBook/HotelBook.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import HotelBookLeft from "../../../../components/SearhPage/HotelBook/BookLeftSide/HotelBookLeft";
import HotelBookRightSide from "../../../../components/SearhPage/HotelBook/RightSide/HotelBookRightSide";
const Hotel = () => {
  return (
    <B2BdashboardLayout>
      <MoveText/>
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <HotelBookLeft/>
        </div>
        <div className={style.flightBookRightSide}>
          <HotelBookRightSide/>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
