import React from "react";
import style from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/SuperAdmin/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/SuperAdmin/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from '../manage.module.css'
import { CloudUpload } from '@mui/icons-material';

const tours = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
        </div>
        <div className={styling.bankListInfo}>
          <RightSideTopBar/>
          <MoveText/>

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
               <h2 className="text-3xl font-bold text-center">Hajj &  Umrah Data Input </h2>
               <div className="w-full mx-auto">
               <form>
                 <div className={styles.fomrControl}>
                 <div >
                  <label>Select Country </label>
                  <select className={styles.inputField}>
                  <option>Bangladesh</option>
                    <option>India</option>
                    <option>Malaysia</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option> Canada</option>
                    <option>USA</option>
                    <option>Egypt</option>
                    <option>Italy</option>
                    <option>Saudi Arobia</option>
                    <option>Dubai</option>
                    <option>Philipines</option>
                </select>
                 </div>
                 <div>
                 <label> Select Visa </label>
                 <select  className={styles.inputField}>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Singapore Island">Singapore Island</option>
                  <option value="Iran">Iran</option>
                  <option value="Hanoi">Hanoi</option>
                  <option value="Tehran">Tehran</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                 </div>
                 </div>
                 <div className={styles.fomrControl}>
                 <div >
                  <label>Hotel Name </label>
                 <input placeholder="Hotel Name " type="text" className={styles.inputField} />
                 </div>
                 <div>
                 <label> Title </label>
                 <input placeholder="Title" type="text" className={styles.inputField} />
                 </div>
                 </div>
                 <div className={styles.fomrControl}>
                 <div >
                  <label>Sub Title </label>
                 <input placeholder="Sub Title" type="text" className={styles.inputField} />
                 </div>
                 <div>
                 <label>Per Adult Price </label>
                 <input placeholder="Per Adult Price " type="text" className={styles.inputField} />
                 </div>
                 </div>
                 <div className={styles.fomrControl}>
                 <div className={styles.uploadFile}>
                 
                 <label for="files"> <CloudUpload className={styles.uploadIcon}/> Image Upload </label>
                 <input  className={styles.inputField} type="file" id="files" class="hidden"/>
                  
                 </div>
                 </div>
               </form>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(tours), { ssr: false });
