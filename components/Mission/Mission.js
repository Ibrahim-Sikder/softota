import React from "react";
import style from "./Mission.module.css";
import mission from "../../public/mission.png";
import Image from "next/image";
const Mission = () => {
  return (
    <div className={style.missionWrap}>
      <div className={style.missionHead}>
        <h2>Our Mission & Vision</h2>
        <p>
          Serving our customer, searching their entire satisfaction and
          providing <br /> touristic services of quality, committing to the
          social, cultural and <br /> environmental reality of our country.
        </p>
      </div>
      <div className={style.vission}>
        <div className={style.missionBox}>
          <h4 className={style.missionText}>Mission</h4>
          <Image
            src={mission}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className={style.missionPara}>
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
        <div className={style.missionBox}>
          <h4 className={style.missionText}>Vission</h4>
          <Image
            src={mission}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className={style.missionPara}>
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
