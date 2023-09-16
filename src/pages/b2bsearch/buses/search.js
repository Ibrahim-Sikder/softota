import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2bBusSearch from "../../../../components/Tour/ToursSearch/B2bBusSearch";
import Footer from "../../../../components/Footer/Footer";

const Search = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar/>
              <MoveText/>
            </div>

            <B2bBusSearch/>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Search), { ssr: false });
