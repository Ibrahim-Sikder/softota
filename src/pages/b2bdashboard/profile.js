import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const profile = () => {
  
  return (
    <B2BdashboardLayout>
       <div className={style.profileInfo}>
          <div>
            <div className={styles.profileTop}>
              <MoveText />

              <div className={styles.profileMiddle}>
                <h2 className="text-white text-xl my-5">
                  Profile Detail: Global04{" "}
                </h2>
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

                <button className={styles.userUpdateBtn}>
                  Update Profile{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(profile), { ssr: false });
