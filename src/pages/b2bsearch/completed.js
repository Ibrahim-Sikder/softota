import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import HotelTrending from "../../../components/Hotel/HotelTrending/HotelTrending";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import dynamic from "next/dynamic";
import HotelHeroBox from "../../../components/UserDashBoard/HotelHeroBox/HotelHeroBox";
import RequestCompleted from "../../../components/UserDashBoard/Agent/Completed/RequestCompleted";
const Completed = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <div className={style.moveText}>
                <marquee
                  onmouseout="this.start()"
                  onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey.</h2></marquee>
              </div>
            </div>
                <RequestCompleted/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
