import React from "react";
import styling from "../../../components/UserDashBoard/UserDashBoard.module.css";
import style from "../../../components/SearhPage/HotelBook/HotelBook.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import HotelBookLeft from "../../../components/SearhPage/HotelBook/BookLeftSide/HotelBookLeft";
import HotelBookRightSide from "../../../components/SearhPage/HotelBook/RightSide/HotelBookRightSide";
import Footer from "../../../components/Footer/Footer";
const Hotel = () => {
  return (
    <section>
      <div className={styling.sideBarWrap}>
        <div className={styling.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className='w-full'>
          <div className={styling.rightSideWrap}>
            <div className={styling.profileTop}>
              <RightSideTopBar />
              <MoveText />
            </div>
            <div className={style.flightBookWrap}>
              <div className={style.flightBookLeftSide}>
                <HotelBookLeft />
              </div>
              <div className={style.flightBookRightSide}>
                <HotelBookRightSide />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
