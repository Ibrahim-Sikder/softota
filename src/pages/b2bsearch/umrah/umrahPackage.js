import React from "react";
import styling from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import style from "../../../../components/Umra/UmrahPackage/Package.module.css";
import umrah from "../../../../public/assets/umraOffer.jpg";
import Footer from "../../../../components/Footer/Footer";
import UmrahPackageLeftSideB2B from "../../../../components/Umra/UmrahPackage/UmrahPackageLeftSideB2B";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
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
                <UmrahPackageLeftSideB2B/>
              </div>
              <div className={style.packageRightSide}>
              <B2BHajjCard
                    img={umrah}
                    heading="Economy Umrah Package "
                    subheading=""
                    title="Available 7-10-14 days Umrah Packages 2023 - 2024"
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
