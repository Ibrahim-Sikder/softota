import React from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import { useState } from "react";

const UmrahPackage = () => {
  const [editorValue, setEditorValue] = useState('');
  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
               Umrah Package Data Input{" "}
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label> Enter Country </label>
                    <select className={styles.inputField}>
                      <option selected value="Bangladesh">
                        Bangladesh
                      </option>
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
                    <select className={styles.inputField}>
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
                    <label> Hajj Package </label>
                    <select className={styles.inputField}>
                      <option value="Select Hajj Package">
                        Select Hajj Package
                      </option>
                      <option value="Economy Hajj Package">
                        Economy Hajj Package
                      </option>
                      <option value="Shifting Hajj Package">
                        Shifting Hajj Package
                      </option>
                      <option value="Non Shifting Hajj Package">
                        Non Shifting Hajj Package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label> Umrah Package </label>
                    <select className={styles.inputField}>
                      <option value="Prmium Package">Prmium Package</option>
                      <option value="Economy Package">Economy Package</option>
                      <option value="Platinum Package">Platinum Package</option>
                      <option value="Family Package">Family Package</option>
                      <option value="Group People Package">
                        Group People Package
                      </option>
                    </select>
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
                  <div className={styles.uploadFile}>
                    <label for="files">
                      {" "}
                      <CloudUpload className={styles.uploadIcon} /> Image Upload{" "}
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
                <TextEditor  value={editorValue} onChange={setEditorValue}/>
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
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(UmrahPackage), { ssr: false });
