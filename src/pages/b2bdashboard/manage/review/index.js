import React from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import { useState } from "react";

const Review = () => {
  const [editorValue, setEditorValue] = useState('');

  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Reivew data Input
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Name</label>
                    <input
                      name="category"
                      placeholder="Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Position</label>
                    <input
                      name="productCategory"
                      placeholder="Position"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
               
                <div className={styles.formControl}>
                  <div>
                    <label> Category</label>
                  <select  className={styles.inputField}>
                    <option value="">Hajj & Umrah</option>
                    <option value="">Flight</option>
                    <option value="">Hotel</option>
                    <option value="">Visa</option>
                    <option value="">Tours</option>
                    <option value="">Train</option>
                  </select>
                  </div>
                  <div>
                    <label>Company Name </label>
                    <input
                      name="subTitle"
                      placeholder="Company Name "
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

export default dynamic(() => Promise.resolve(Review), { ssr: false });
