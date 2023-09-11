import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BToursSearch from "../../../../components/Tour/ToursSearch/B2BToursSearch";
import Footer from "../../../../components/Footer/Footer";
const TourSearch = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className='w-full'>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText />
            </div>
            <B2BToursSearch/>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TourSearch), { ssr: false });
