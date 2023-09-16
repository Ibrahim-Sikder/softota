import React from "react";
import styling from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import style from "../../../../../components/Umra/UmrahPackage/Package.module.css";
import shifting from "../../../../../public/assets/hajj6.jpg";
import HajjLeftSide from "../../../../../components/Umra/HajjPackage/HajjLeftSide";
import Footer from "../../../../../components/Footer/Footer";
import B2BHajjCard from "../../../../../components/Shared/HajjUmraCard/B2BHajjCard";
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
                <B2BHajjCard
                  img={shifting}
                  heading="Economy - Hajj Packages ( Non-Shifting)"
                  subheading=""
                  title="Offer Low-Cost Hajj Packages 2024 - 2025 from Bangladesh"
                >
                </B2BHajjCard>
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
