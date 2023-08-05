import React from "react";
import style from "./FlightMission.module.css";
const FlightMission = () => {
  return (
    <div>
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

            <p className={style.missionPara}>
              Providing advanced travel solutions with great care and
              satisfaction.
            </p>
          </div>
          <div className={style.missionBox}>
            <h4 className={style.missionText}>Vission</h4>

            <p className={style.missionPara}>
              Ghurtoni.com is partnering with you to reach your dream
              destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightMission;
