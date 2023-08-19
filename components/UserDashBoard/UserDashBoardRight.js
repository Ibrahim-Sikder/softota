import React, { useEffect, useState } from "react";
import styles from './UserDashBoard.module.css'
import TourDestination from "../Tour/TourDestination";
import RightSideTopBar from "./RightSideTopBar";
import HeroBox from "./HeroBox";
import MoveText from "./MoveText/MoveText";



const UserDashBoardRight = () => {


  return (
    <div className={styles.rightSideWrap}>
      <div className={styles.profileTop}>
        <RightSideTopBar />
        <MoveText/>
      </div>
    
    <HeroBox/>
      <div className={styles.packageTour}>
        <TourDestination />
      </div>
    </div>
  )
}


export default UserDashBoardRight
