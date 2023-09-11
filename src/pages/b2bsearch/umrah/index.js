import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import UmraHeroBox from "../../../../components/UserDashBoard/UmraHeroBox/UmraHeroBox";
import UmraPackage from "../../../../components/Umra/UmraPackage";
import Footer from "../../../../components/Footer/Footer";
import dynamic from "next/dynamic";
const Umra = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className='w-full'>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar/>
              <MoveText/>
            </div>
            <div></div>
            <UmraHeroBox/>
            <UmraPackage/>
            <Footer/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Umra), { ssr: false });
