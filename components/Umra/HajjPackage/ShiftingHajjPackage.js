import React from 'react';
import shifting from '../../../public/assets/hajj6.jpg'
import HajjUmrahCard from '../../Shared/HajjUmraCard/HajjUmrahCard';
import style from '../UmrahPackage/Package.module.css'
import PackageLeftSide from '../UmrahPackage/PackageLeftSide';
const ShiftingHajjPackage = () => {
    return (
        <div>
            <div className={style.packageWrap}>
            <div className={style.packageLeftSide}> 
                 <PackageLeftSide/>
            </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={shifting}
            heading="Shifting - Hajj Packages"
            subheading=""
            title="Most Affordable Shifting Hajj Packages 2024 - 2024 from Dhaka, Bangladesh"
          ></HajjUmrahCard>
        </div>
      </div>
        </div>
    );
};

export default ShiftingHajjPackage;