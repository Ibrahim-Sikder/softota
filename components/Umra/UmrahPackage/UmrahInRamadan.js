import React from "react";
import style from "./Package.module.css";
import UmrahPackageLeftSide from "./UmrahPackageLeftSide";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import umrah from '../../../public/assets/umra3.jpeg'

const UmrahInRamadn = () => {
  return (
    <div>
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <UmrahPackageLeftSide/>
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
  );
};

export default UmrahInRamadn;
