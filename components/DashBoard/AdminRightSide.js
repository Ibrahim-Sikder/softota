import Image from "next/image";
import React from "react";
import clock from "../../public/clock.png";
import clock2 from "../../public/clock2.png";
import clock3 from "../../public/clock3.png";
import clock4 from "../../public/clock4.png";
import clock5 from "../../public/clock5.png";
import style from "./DashBoard.module.css";
const AdminRightSide = () => {
  return (
    <div>
      <div className={style.adminRightSide}>
        <div className="flex mb-3">
          <Image
            src={clock}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p className="ml-3">4 Days - 3 Nights</p>
        </div>
        <div className="flex mb-3">
          <Image
            src={clock3}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p className="ml-3">Tour Type - Economy</p>
        </div>
        <div className="flex mb-3">
          <Image
            src={clock4}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p className="ml-3">Royal Tulip Hotel, Deira (Dubai)</p>
        </div>
        <div className="flex mb-3">
          <Image
            src={clock5}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <p className="ml-3">Price includes VAT & Tax</p>
        </div>
        <div className="flex mb-3">
          <span className="text-">Starts From </span>
          <p className="ml-3"> 27,500TK</p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className={style.bookingBtn}>Book Now </button>
          <button className={style.bookingBtn2}>Book Now </button>
        </div>
      </div>
    </div>
  );
};

export default AdminRightSide;
