import React from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import { useState } from "react";

const Tours = () => {
  const [editorValue, setEditorValue] = useState('');
  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Tours Data Input{" "}
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                      name="category"
                      placeholder="Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                      name="productCategory"
                      placeholder="Sub Title "
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
                    <label> What is included </label>
                    <input
                      name="title"
                      placeholder="What is included "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> What is excluded </label>
                    <input
                      name="subTitle"
                      placeholder="What is excluded "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Itinary </label>
                    <input
                      name="title"
                      placeholder="Itinary"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Category Type </label>
                    <input
                      name="subTitle"
                      placeholder="Category Type  "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Product Category  </label>
                    <input
                      name="title"
                      placeholder="Product Category "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Price Low To Hight  </label>
                    <input
                      name="subTitle"
                      placeholder="Price Low To Hight "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Price Hight To Low  </label>
                    <input
                      name="title"
                      placeholder=" Price Hight To Low  "
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
                  <TextEditor value={editorValue} onChange={setEditorValue} />
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

export default dynamic(() => Promise.resolve(Tours), { ssr: false });
