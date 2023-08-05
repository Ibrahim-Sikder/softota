import React from "react";
import style from "./userProfile.module.css";
import ProfileLeftSide from "./profileLeftSide/ProfileLeftSide";
import Footer from "../../../components/Footer/Footer";
import ProfileRightSide from "./ProfileRightSide/ProfileRightSide";
import Nav from "../../../components/NavBarr/Nav";

const Profile = () => {
  return (
    <section>
      <Nav />
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <ProfileLeftSide></ProfileLeftSide>
          </div>
          <div className={style.userProfileRightSide}>
            <ProfileRightSide></ProfileRightSide>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Profile;
