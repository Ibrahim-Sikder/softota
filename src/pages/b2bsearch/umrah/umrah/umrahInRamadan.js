import React from "react";
import styling from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import style from "../../../../../components/Umra/UmrahPackage/Package.module.css";
import umrah from "../../../../../public/assets/umra3.jpeg";
import Footer from "../../../../../components/Footer/Footer";
import UmrahPackageLeftSideB2B from "../../../../../components/Umra/UmrahPackage/UmrahPackageLeftSideB2B";
import HajjUmrahCard from "../../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
const umrahInRamadan = () => {
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
                <HajjUmrahCard
                    img={umrah}
                    heading="Ramadan Umrah Package 2023"
                    subheading=""
                    title="Ramadan Umrah Packages 2023-24 from Dhaka Bangladesh"
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

export default dynamic(() => Promise.resolve(umrahInRamadan), { ssr: false });
