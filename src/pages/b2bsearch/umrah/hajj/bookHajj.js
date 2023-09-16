import React from "react";
import styling from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import HajjUmrahCard from "../../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import style from "../../../../../components/Umra/UmrahPackage/Package.module.css";
import economy from "../../../../../public/assets/hajj5.jpeg";
import HajjLeftSide from "../../../../../components/Umra/HajjPackage/HajjLeftSide";
import B2BHajjBook from "../../../../../components/Umra/HajjPackage/B2BHajjBook";
const BookHajj = () => {
  return (
    <section>
      <div className={styling.sideBarWrap}>
        <div className={styling.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className="w-full">
          <div className={styling.profileTop}>
            <RightSideTopBar />
            <MoveText />
          </div>
          <div>
            <div className={style.packageWrap}>
              <B2BHajjBook />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(BookHajj), { ssr: false });
