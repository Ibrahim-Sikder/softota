import React from 'react';
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
import dynamic from "next/dynamic";
const profile = () => {
     return (
          <div>
               <div className={style.sideBarWrap}>
                    <div className={style.leftSideBar}>
                         <UserDashBoardLeft />
                    </div>
                    <div className={style.profileInfo}>
                         <div>
                              <div className={styles.profileTop}>
                                   <RightSideTopBar />
                                   <div className={style.moveText}>
                                        <marquee
                                             onmouseout="this.start()"
                                             onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! </h2></marquee>
                                   </div>
                               
                                   <div className={styles.profileMiddle}>
                                   <h2 className='text-white text-xl my-5'>Profile Detail: Global04 </h2>
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

export default dynamic(() => Promise.resolve(profile), { ssr: false });