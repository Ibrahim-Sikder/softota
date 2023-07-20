import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const profile = () => {
     return (
          <div>
          <div>
               <div className={style.dasBoardTop}>
              
                 <div className={style.logoWrap}>
                 <Image
                 src={logo}
                 alt="Picture of the author"
                 width={80}
                 height={20}
                 className={style.logo}
                 />
                    <input type="text" placeholder='Search'/>
                    <p className={style.searchIcon}><FaSistrix/></p>
                    
                 </div>
     
                 <div className={style.userWrap}>
                    <p><FaCommentAlt/></p>
                    <p><FaHeadSideCoughSlash/></p>
                    <p><FaUserCircle/></p>
                    <p>Ibrahim Sikder</p>
                    <p><FaEllipsisV/></p>
                 </div>
               </div>
          </div>
           <div className={style.sideBarWrap}>
           <div className={style.leftSideBar}>
               <UserDashBoardLeft/>
           </div>
           <div className={style.rightSideBar}>
               <div>
                    <div className={styles.profileTop}>
                         <div>
                         <span className='text-[#808FA4]'>Dashboard / Profile </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Profile</h2>
                              <div className={styles.pages}>
                                   <button>Add New Quick Pick Passenger</button>
                                   <span >Pages</span>
                                   <FaAngleLeft/>
                                   <span>1</span>
                                   <span>2</span>
                                   <span>3</span>
                              </div>
                         </div>
                         </div>
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