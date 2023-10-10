import React, { useState } from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

const Busses = () => {
  const [editorValue, setEditorValue] = useState('');
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Bus Data Input
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Operators </label>
                    <input
                      name="category"
                      placeholder="Operators"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Type of Bus </label>
                    <input
                      name="productCategory"
                      placeholder="Type of Bus "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Boarding Point </label>
                    <input
                      name="category"
                      placeholder="Boarding Point "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Facilities </label>
                    <input
                      name="productCategory"
                      placeholder="Facilities "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Price</label>
                    <input
                      name="category"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Date </label>
                    <input
                      name="Date"
                      placeholder="Date "
                      type="date"
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

export default dynamic(() => Promise.resolve(Busses), { ssr: false });
