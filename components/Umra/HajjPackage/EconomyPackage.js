import React from "react";
import economy from "../../../public/assets/hajj5.jpeg";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import style from "../UmrahPackage/Package.module.css";
import PackageLeftSide from "../UmrahPackage/PackageLeftSide";
const EconomyPackage = () => {
  return (
    <div>
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <PackageLeftSide />
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
  );
};

export default EconomyPackage;
