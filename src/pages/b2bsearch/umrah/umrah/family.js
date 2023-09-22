import React from "react";
import styling from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import style from "../../../../../components/Umra/UmrahPackage/Package.module.css";
import umrah from "../../../../../public/assets/umrah6.jpg";
import Footer from "../../../../../components/Footer/Footer";
import UmrahPackageLeftSideB2B from "../../../../../components/Umra/UmrahPackage/UmrahPackageLeftSideB2B";
import B2BHajjCard from "../../../../../components/Shared/HajjUmraCard/B2BHajjCard";
const Premium = () => {
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
                <UmrahPackageLeftSideB2B/>
              </div>
              <div className={style.packageRightSide}>
                 <B2BHajjCard
                  img={umrah}
                  heading="Family Umrah Package 2023"
                  subheading=""
                  title=" Family People Umrah Package from Bangladesh"
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

export default dynamic(() => Promise.resolve(Premium), { ssr: false });
