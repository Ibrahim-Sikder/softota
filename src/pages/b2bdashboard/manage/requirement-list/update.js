import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Update = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
               Requirment Data Update
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                <div>
                    <label>Select Requirement List </label>
                    <select className={styles.inputField}>
                      <option value="  Hajj Visa Requirement">
                     Hajj Visa Requirement
                      </option>
                      <option value="Umrah Visa Requirement">
                      Umrah Visa Requirement
                      </option>
                    </select>
                  </div>
                  <div>
                    <label> Popular Hajj Package </label>
                    <select className={styles.inputField}>
                      <option value="Platinum Umrah Packages">
                      Platinum Hajj Packages
                      </option>
                      <option value="Shifting Hajj Package">
                        Shifting Hajj Package
                      </option>
                      <option value="Non Shifting Hajj Package">
                        Non Shifting Hajj Package
                      </option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Popular Umrah Package </label>
                    <select className={styles.inputField}>
                      <option value="Platinum Umrah Packages">
                      Platinum Umrah Packages
                      </option>
                      <option value="Shifting Hajj Package">
                        Family Umrah Package
                      </option>
                      <option value="Non Shifting Hajj Package">
                       Group Umrah Package
                      </option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <ReactQuill
                      value={value}
                      onChange={onChange}
                      modules={{
                        toolbar: [
                          [{ font: [] }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }],
                          [{ align: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["bold", "italic", "underline"],
                          [{ align: [] }],
                          ["link", "image"],
                          ["video"],
                          ["clean"],
                          ["blockquote", "code-block"],
                          ["direction"],
                          ["formula"],
                          ["strike"],
                        ],
                      }}
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
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Update), { ssr: false });
