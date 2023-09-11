import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import TourPackage from "../../../components/Tour/TourPackage/TourPackage";
import B2BHotelDetail from "../../../components/Hotel/HotelDetails/B2BHotelDetail";
import Footer from "../../../components/Footer/Footer";
const Hotel = () => {
  return (
    <section>
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
            <B2BHotelDetail/>
           <div className="pl-[50px]">
           <TourPackage />
           </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
