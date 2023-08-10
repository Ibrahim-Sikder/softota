import React from "react";
import ProfileLeftSide from "./profileLeftSide/ProfileLeftSide";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import style from "./userProfile.module.css";
import card from "../../../public/deleteAccount.png";
import Nav from "../../../components/NavBarr/Nav";
const manageData = () => {
  return (
    <section>
      <Nav/>
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <ProfileLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
            <div className={style.saveCard}>
              <div>
                <Image
                  src={card}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />

                <h4 className="text-2xl mt-5 font-bold ">
                  You can delete your Ghuronti Account at any time. If <br />
                  you change your mind, you might not be able to <br /> recover
                  it.
                </h4>
                <div>
                  <button className={style.deleteBtn}>Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default manageData;
