import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import HeroBox from "../../../components/UserDashBoard/HeroBox";
import dynamic from "next/dynamic";
import TourHeroBox from "../../../components/UserDashBoard/TourHeroBox";
const Tours = () => {
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
                                        onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! Reserver your best hotel of your tours.</h2></marquee>
                              </div>
                         </div>
                         <TourHeroBox/>
                         <BestPlace></BestPlace>
                         <Travel></Travel>
                         <Customer></Customer>
                         </div>


                    </div>
               </div>
          </div>
     );
};

export default dynamic(() => Promise.resolve(Tours), { ssr: false });
