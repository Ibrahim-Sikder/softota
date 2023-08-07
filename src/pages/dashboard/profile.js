import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const profile = () => {
     return (
          <div>
           <div className={style.sideBarWrap}>
           <div className={style.leftSideBar}>
               <UserDashBoardLeft/>
           </div>
           <div className={style.rightSideBar}>
               <div>
                    <div className={styles.profileTop}>
                         <RightSideTopBar/>
                         <div className={styles.globalProfile}>
                              <p>Profile Detail: Global04 </p>
                         </div>
                         <div className={styles.profileMiddle}>
                           <div className={styles.userInfo}>
                              <ul className={styles.userLeftInfo}>
                                   <li>Username</li>
                                   <li>Name</li>
                                   <li>Email</li>
                                   <li>Company</li>
                                   <li>Member Since </li>
                                   <li>Status</li>
                                   <li>Created By</li>
                              </ul>
                              <ul>
                                   <li>Global04</li>
                                   <li>Mr Global Explore</li>
                                   <li>visa@geplbl.com</li>
                                   <li>Global Explore Pvt Ltd </li>
                                   <li>24 Sep 2022 </li>
                                   <li>Active</li>
                                   <li>raisul324</li>
                              </ul>
                              
                           </div>
                           
                           <button className={styles.userUpdateBtn}>Update Profile </button>
                         </div>
                    </div>
               </div>

                </div>


  
         </div>
        </div>
     );
};

export default profile;