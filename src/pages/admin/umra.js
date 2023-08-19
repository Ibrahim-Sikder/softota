import React from "react";
import style from '../../../components/UserDashBoard/UserDashBoard.module.css';
import UmraPackage from "../../../components/Umra/UmraPackage";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import UmraHeroBox from "../../../components/SuperAdmin/UmraHeroBox/UmraHeroBox";
import RightSideTopBar from "../../../components/SuperAdmin/RightSideTopBar";
import UserDashBoardLeft from "../../../components/SuperAdmin/UserDashBoardLeft";

const Umra = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={style.rightSideBar}>
         <div className={style.rightSideWrap}>
         <div className={style.profileTop}>
          <RightSideTopBar/>
        <MoveText/>
        </div>
        <div>
        </div>
        <UmraHeroBox/>
        <UmraPackage/>
         </div>

        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Umra), { ssr: false });
