import React from "react";
import style from "./Package.module.css";
import umrah from "../../../public/assets/umrahOffer.jpg";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import UmrahPackageLeftSide from "./UmrahPackageLeftSide";
const Package = () => {
  return (
    <div>
      
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <UmrahPackageLeftSide/>
        </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={umrah}
            heading="Economy Umrah Package "
            subheading=""
            title="Available 7-10-14 days Umrah Packages 2023 - 2024"
          ></HajjUmrahCard>
        </div>
      </div>
    </div>
  );
};

export default Package;
