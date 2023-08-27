import React from "react";
import style from "./Train.module.css";
import Places from "../Places/Places";
import Travel from "../Travel/Travel";
import Trending from "../Trending/Trending";
import Customer from "../Customer/Customer";
import TrainBanner from "./TrainBanner";
const Train = () => {
  return (
    <section className={style.train}>
      <TrainBanner></TrainBanner>
      <Places></Places>
      <Travel></Travel>
      <Trending></Trending>
      <Customer></Customer>
    </section>
  );
};

export default Train;
