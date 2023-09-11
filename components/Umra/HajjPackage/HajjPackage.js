import style from "../UmrahPackage/Package.module.css";
import umrah from "../../../public/assets/hajj3.jpg";
import HajjUmrahCard from "../../Shared/HajjUmraCard/HajjUmrahCard";
import PackageLeftSide from "../UmrahPackage/PackageLeftSide";
const HajjPackage = ({ heading, subheading }) => {
  return (
    <div>
      <div className={style.packageWrap}>
        <div className={style.packageLeftSide}>
          <PackageLeftSide/>
        </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={umrah}
            heading="Premium - Hajj Packages ( Non-Shifting)"
            subheading=""
            title="Most Affordable Hajj Packages 2023-2024 from Dhaka, Bangladesh"
          ></HajjUmrahCard>
        </div>
      </div>
    </div>
  );
  
};

export default HajjPackage;
