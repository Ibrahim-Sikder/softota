import React, { useEffect, useState } from "react";
import styles from './UserDashBoard.module.css'
import TourDestination from "../Tour/TourDestination";
import RightSideTopBar from "./RightSideTopBar";
import HeroBox from "./HeroBox";



const UserDashBoardRight = () => {


  return (
    <div className={styles.rightSideWrap}>
      <div className={styles.profileTop}>
        <RightSideTopBar />
        <div className={styles.moveText}>
          <marquee
            onmouseout="this.start()"
            onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey.</h2></marquee>
        </div>
      </div>
    
    <HeroBox/>
      <div className={styles.packageTour}>
        <TourDestination />
      </div>
    </div>
  )
}


export default UserDashBoardRight
