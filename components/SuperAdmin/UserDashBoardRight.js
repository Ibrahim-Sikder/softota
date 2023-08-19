import React, { useEffect, useState } from "react";
import styles from '../../components/UserDashBoard/UserDashBoard.module.css'

import MoveText from "../UserDashBoard/MoveText/MoveText";
import TourDestination from "../Tour/TourDestination";
import HeroBox from "./HeroBox";
import RightSideTopBar from "./RightSideTopBar";




const UserDashBoardRight = () => {


  return (
    <div className={styles.rightSideWrap}>
      <div className={styles.profileTop}>
        <RightSideTopBar />
        <MoveText/>
      </div>
    
    <HeroBox></HeroBox>
      <div className={styles.packageTour}>
        <TourDestination />
      </div>
    </div>
  )
}


export default UserDashBoardRight
