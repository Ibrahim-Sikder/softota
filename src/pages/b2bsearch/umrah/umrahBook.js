import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import Footer from "../../../../components/Footer/Footer";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import UmrahBook from "@/pages/hajjUmra/umrahBook";
const Umra = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className='w-full'>
        <div className={style.profileTop}>
              <RightSideTopBar/>
              <MoveText/>
            </div>
            <div></div>
            <UmrahBook/>
            <Footer/>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Umra), { ssr: false });
