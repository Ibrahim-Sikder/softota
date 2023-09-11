import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../components/UserDashBoard/RightSideTopBar";
import UmraPackage from "../../../components/Umra/UmraPackage";
import dynamic from "next/dynamic";
import UmraHeroBox from "../../../components/UserDashBoard/UmraHeroBox/UmraHeroBox";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import Footer from "../../../components/Footer/Footer";

const Umra = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
              <MoveText />
            </div>
            <div></div>
            <UmraHeroBox />
            <UmraPackage />
            <Footer/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Umra), { ssr: false });
