import React, { useEffect, useState } from "react";
import styles from './UserDashBoard.module.css'
import { Notifications } from '@mui/icons-material';
import style from '../../components/Banner/Banner.module.css'
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Add, Groups2, HorizontalRule } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import TourDestination from "../Tour/TourDestination";
import Image from "next/image";
import logo from '../../public/assets/ghuronti.jpg'
import RightSideTopBar from "./RightSideTopBar";
import HeroBox from "./HeroBox";









const UserDashBoardRight = () => {


  return (
    <div>
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
