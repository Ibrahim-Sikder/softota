import React from "react";
import {
  FaCalendarAlt,
  FaUserTie,
  FaBed
} from "react-icons/fa";
import style from "./Book.module.css";
const B2bHotelBookLeftSide = () => {
  return (
    <section>
      <h2 className={style.hotelName}>HOTEL GOLDEN HILL</h2>
<div className={style.guestWrap}>
<div className={style.dateCard}>
<FaCalendarAlt className={style.dateIcon}/>
    <div>
      <small>Check In - Check Out </small>
      <p>03 Oct 2023 - 04 Oct 2023</p>
    </div>
</div>

<div className={style.totalGuest}>
  <span>1 Night</span>
  <div className={style.line}></div>
  <FaUserTie/>
  <span>Guest </span>
  <select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  <div className={style.line}></div>
  <span>3</span>
  <FaBed/>
</div>
</div>


<div className={style.passengerInformation}>
  <h3 className="text-xl font-bold text-[#4AB449]">Passenger Infromation </h3>
 <form>
 <div className={style.formControl}>
 <div className={style.passengerInfo}>
    <label> Given Name * </label> <br />
    <input className={style.passengerField} type="text" placeholder="Given Name" />
  </div>
  <div className={style.passengerInfo}>
    <label> Email Address *</label> <br />
    <input className={style.passengerField} type="email" placeholder="Email" />
  </div>
 </div>
 <div className={style.formControl}>
 <div className={style.passengerInfo}>
    <label> Naationality </label> <br />
    <select className={style.passengerField}>
      <option value="Bangladesh"> Bangladesh</option>
      <option value="Malaysia"> Malaysia</option>
      <option value="India"> India</option>
      <option value="Pakistan"> Pakistan</option>
    </select>
  </div>
  <div className={style.passengerInfo}>
    <label>NRIC No. *</label> <br />
    <input className={style.passengerField} type="number" placeholder="NRIC No" />
  </div>
 </div>
 <div className={style.formControl}>
 <div className={style.passengerInfo}>
 <label> Country of Residence * </label> <br />
    <select className={style.passengerField}>
      <option value="Bangladesh"> Bangladesh</option>
      <option value="Malaysia"> Malaysia</option>
      <option value="India"> India</option>
      <option value="Pakistan"> Pakistan</option>
    </select>
  </div>
 
  <div className={style.passengerInfo}>
    <label> Mobile Number * </label> <br />
    <input className={style.passengerField} type="number" placeholder="Mobile Number" />
  </div>
 </div>
 </form>
 
 <div>
        <div className={style.personal}>
          <h3 className="text-xl font-bold text-[#4AB449]">Guest Details </h3>
        </div>
        <div className={style.guestInfoWrap}>
          <span>Executive Suite Hill view</span> <br />
          <div className={style.guestInfo}>
            <label htmlFor="">Guest 1 (Adult)</label>
            <div className={style.guestField}>
              <input placeholder="Given Name" type="text" />
              <input placeholder="Sure Name" type="text" />
            </div>
          </div>
          <div className={style.guestInfo}>
            <label htmlFor="">Guest 2 (Children)</label>
            <div className={style.guestField}>
              <input placeholder="Given Name" type="text" />
              <input placeholder="Sure Name" type="text" />
            </div>
          </div>
          <div className={style.guestInfo}>
            <label htmlFor="">Guest 3 (Infant)</label>
            <div className={style.guestField}>
              <input placeholder="Given Name" type="text" />
              <input placeholder="Sure Name" type="text" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-5">
            <input type="checkbox" />
            <small className="ml-2"> I m the guest staying in this property</small>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <input type="checkbox" />
            <small className="ml-2"> By checking this box, I confirm that I have read and understand the <strong>Privacy Policy and Cancellation Policy</strong> .</small>
          </div>
        </div>

      </div>


</div>

     
    </section>
  );
};

export default B2bHotelBookLeftSide;
