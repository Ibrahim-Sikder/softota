import React from "react";
import style from "./Travel.module.css";
import Image from "next/image";
import travel from "../../public/assets/travell.png";
const Travel = () => {
  return (
    <section className={style.travel}>
      <Image
        src={travel}
        alt="Picture of the author"
        className={style.travelImg}
      />
    </section>
  );
};

export default Travel;
