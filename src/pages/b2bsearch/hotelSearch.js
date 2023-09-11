import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BHotelSearch from "../../../components/SearhPage/B2BHotelSearch";
import Footer from "../../../components/Footer/Footer";

const Hotel = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.hotelRightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText />
            </div>
            <div>
              <B2BHotelSearch/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
