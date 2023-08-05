import Image from "next/image";
import React from "react";
import TopBar from "../../../components/TopBar/TopBar";
import Header from "../../../components/Header/Header";
import ProfileLeftSide from "./profileLeftSide/ProfileLeftSide";
import Footer from "../../../components/Footer/Footer";
import style from "./userProfile.module.css";
import card from "../../../public/saveCard.png";
const saveCard = () => {
  return (
    <section>
      <TopBar />
      <Header />
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
                <h4 className="text-3xl font-bold mt-5">Saved Cards</h4> <br />
                <h4 className="text-3xl font-bold ">No Saved Cards Found</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default saveCard;
