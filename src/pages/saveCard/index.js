import React from "react";
import AdminLeftSide from "../../../components/DashBoard/AdminLeftSide";
import style from "./card.module.css";
import Image from "next/image";
import saveCard from "../../../public/saveCard.png";
const index = () => {
  return (
    <section className={style.saveCardWrap}>
      <div className="grid grid-cols-12">
        <div>
          <AdminLeftSide></AdminLeftSide>
        </div>
        <div className="col-span-9">
          <div className={style.delete}>
            <Image
              src={saveCard}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div>
              <p className={style.deleteText}>
                Saved Cards <br />
                No Saved Card Found
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
