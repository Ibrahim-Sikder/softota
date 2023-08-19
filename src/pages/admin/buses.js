import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import BestPlace from "../../../components/BestPlace/BestPlace";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import TourDestination from "../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import BusesHeroBox from "../../../components/SuperAdmin/BusesHeroBox/BusesHeroBox";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";


const Buses = () => {
     return (
          <div>
               <div className={style.sideBarWrap}>
                    <div className={style.leftSideBar}>
                         <UserDashBoardLeft/>
                    </div>
                    <div className={style.rightSideBar}>
                         <div className={style.rightSideWrap}>
                         <div className={style.profileTop}>
                              <RightSideTopBar />
                             <MoveText/>
                         </div>
                         <div>
                         </div>
                         <BusesHeroBox />
                         <BestPlace />
                         <Travel></Travel>
                         <TourDestination></TourDestination>
                         <Customer></Customer>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default dynamic(() => Promise.resolve(Buses), { ssr: false });