import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import UserDashBoardLeft from "../../../../components/SuperAdmin/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/SuperAdmin/RightSideTopBar";
const manage = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={styling.bankListInfo}>
          <RightSideTopBar/>
          <MoveText/>

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
               <h3>Data Management </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(manage), { ssr: false });
