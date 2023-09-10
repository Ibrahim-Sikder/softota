import React from 'react';
import shifting from '../../../public/assets/hajj7.jpeg'
import HajjUmrahCard from '../../Shared/HajjUmraCard/HajjUmrahCard';
import style from '../UmrahPackage/Package.module.css'
import PackageLeftSide from '../UmrahPackage/PackageLeftSide';
const NonShiftingHajjPackage = () => {
    return (
        <div>
            <div className={style.packageWrap}>
            <div className={style.packageLeftSide}> 
                 <PackageLeftSide/>
            </div>
        <div className={style.packageRightSide}>
          <HajjUmrahCard
            img={shifting}
            heading="Non-Shifting - Hajj Packages"
            subheading=""
            title="Pilgrims Are Always Kept at a Single Place in Makkah and Madinah Close to Haram in Non-Shifting Packages."
          ></HajjUmrahCard>
        </div>
      </div>
        </div>
    );
};

export default NonShiftingHajjPackage;