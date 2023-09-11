import React from "react";
import styling from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import HajjUmrahCard from "../../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import style from "../../../../../components/Umra/UmrahPackage/Package.module.css";
import economy from "../../../../../public/assets/hajj7.jpeg";
import HajjLeftSide from "../../../../../components/Umra/HajjPackage/HajjLeftSide";
import Footer from "../../../../../components/Footer/Footer";
const Hajj = () => {
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
              <div className={style.packageLeftSide}>
                <HajjLeftSide />
              </div>
              <div className={style.packageRightSide}>
                <HajjUmrahCard
                  img={economy}
                  heading="Economy - Hajj Packages ( Non-Shifting)"
                  subheading=""
                  title="Offer Low-Cost Hajj Packages 2024 - 2025 from Bangladesh"
                ></HajjUmrahCard>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hajj), { ssr: false });
