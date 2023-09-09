import React from "react";
import style from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/SuperAdmin/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/SuperAdmin/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from '../manage.module.css'
import { CloudUpload } from '@mui/icons-material';

const Train = () => {
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
               <h2 className="text-3xl font-bold text-center">Train Data Input </h2>
               <div className="w-full mx-auto">
               <form>
                    <div className={styles.formControl}>
                      <div>
                      <label> Enter Country </label>
                      <select  className={styles.inputField}>
                        <option selected value="Bangladesh">Bangladesh</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Iran">Iran</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Japan">Japan</option>
                </select>
                      </div>
                      <div>
                        <label> Enter City </label>
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
                    <div className={styles.formControl}>
                    <div>
                        <label> Enter City </label>
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
                      <div>
                        <label> Address  </label>
                        <input
                          name="address"
                          placeholder="Address"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Category Type </label>
                        <input
                          name="category"
                          placeholder="Category Type "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label>Product Category</label>
                        <input
                          name="productCategory"
                          placeholder="Product Category "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Date</label>
                        <input
                          name="date"
                          placeholder="Date "
                          type="date"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label>Price </label>
                        <input
                          name="price"
                          placeholder="Price"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                    <div>
                        <label> Title </label>
                        <input
                          name="title"
                          placeholder="Title"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Sub Title </label>
                        <input
                          name="subTitle"
                          placeholder=" Sub Title"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                      <label> Description </label> 
                      <textarea name='description' placeholder="Description"></textarea>
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div className={styles.uploadFile}>
                        <label for="files">
                          {" "}
                          <CloudUpload className={styles.uploadIcon} /> Image
                          Upload{" "}
                        </label>
                        <input
                          name="image"
                          className={styles.inputField}
                          type="file"
                          id="files"
                          class="hidden"
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <button className={styles.submitBtn} type="submit">
                        Submit
                      </button>
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

export default dynamic(() => Promise.resolve(Train), { ssr: false });
