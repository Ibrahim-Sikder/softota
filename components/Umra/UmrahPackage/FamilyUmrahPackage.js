import React from "react";
import style from "./Package.module.css";
import UmrahPackageLeftSide from "./UmrahPackageLeftSide";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import umrah from '../../../public/assets/umrah6.jpg'
const FamilyUmrahPackage = () => {
  return (
    <div>
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <UmrahPackageLeftSide/>
        </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={umrah}
            heading="Family Umrah Package 2023"
            subheading=""
            title=" Family People Umrah Package from Bangladesh"
          ></HajjUmrahCard>
        </div>
      </div>
    </div>
  );
};

export default FamilyUmrahPackage;
