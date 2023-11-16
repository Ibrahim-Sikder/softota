import React from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import style from "./confirm.module.css";
const confirm = () => {
  return (
    <div>
      <Nav />
      <div className={style.purchasWrap}>
        <h3 className="text-2xl font-bold">Purchase Ticket </h3>
        <hr />
        <div className="mt-10">
          <h3 className="text-xl font-bold ">Passenger Details </h3>
          <div className={style.passengerInforWrap}>
            <div className={style.passengerInfoLeftSide}>
              <div className={style.journyDetails}>
              <h5>Journey Details</h5>
              <h3 className="text-xl">Train Name </h3>
              <strong className="block">Dhaka - Cumilla </strong>
              <small>
                Deperture Time: <strong>Thu, 31 Mar 2022, 06.30AM </strong>
              </small>
              <hr />
              <div>
                <small>
                  Cash : <strong>TA</strong>
                </small>
                <small>
                  Seat Type: <strong>SHOVAN</strong>
                </small>
                <small>
                  Seats: <strong>TA-27</strong>
                </small>
              </div>
              </div>
              <div className={style.journyDetails}>
                <h3 className="text-xl font-bold">Fare Details </h3>
                <div className="flex items-center justify-between">
                    <strong>Total Price</strong>
                    <span>300Tk</span>
                </div>
              </div>
            </div>
            <div className={style.passengerInfoRightSide}>
                
              <h3 className="text-xl font-bold">Passenger 1</h3>
              <div>
                <label>Name </label>
                <input type="Passenger Name " />
              </div>
              <div>
                <label>Passenger Type </label>
                <select>
                  <option value="Adult">Adult</option>
                  <option value="Adult">Child</option>
                </select>
              </div>
              <div>
                <h3 className="text-xl">Contact Information </h3>
                <div>
                  <label>Mobile Number </label>
                  <input type="Mobile Number" />
                </div>
                <div>
                  <label>Email </label>
                  <input type="Email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default confirm;
