import React from "react";
import style from "./Package.module.css";
import UmrahPackageLeftSide from "./UmrahPackageLeftSide";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import umrah from '../../../public/assets/umrah4.webp'
const PlatinumUmrahPackage = () => {
  return (
    <div>
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <UmrahPackageLeftSide/>
        </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={umrah}
            heading="Platinum Umrah Package 2023"
            subheading=""
            title="Platinum Umrah Package 2023 - 2024 from Bangladesh"
          ></HajjUmrahCard>
        </div>
      </div>
    </div>
  );
};

export default PlatinumUmrahPackage;
