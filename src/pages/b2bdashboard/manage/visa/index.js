import React from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from '../manage.module.css'
import { CloudUpload } from '@mui/icons-material';
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import { useState } from "react";

const Visa = () => {
  const [editorValue, setEditorValue] = useState('');
  return (
    <B2BdashboardLayout>
       <MoveText/>

<div className="mt-5">
  <div className={styling.profileTop}>
    <div className={styling.flightHistory}>
     <h2 className="text-3xl font-bold text-center">Visa Data Input </h2>
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
              <label> Visa Type  </label>
          <select  className={styles.inputField}>
            <option value="Select Visa Type ">Select Visa Type</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Business Visa">Business Visa</option>
       </select>
            </div>
            <div>
              <label> Traveller Type  </label>
          <select  className={styles.inputField}>
          <option value="Select Traveller Type">Select Traveller Type </option>
          <option value="Govt. Job Holder">Govt. Job Holder</option>
        <option value="Private Job Holder">Private Job Holder</option>
        <option value="Student">Student</option>
        <option value="Non Student">Non Student</option>
        <option value="House Wife">House Wife </option>
        <option value="Advocate Lawyer">Advocate Lawyer </option>
        <option value="Doctor">Doctor </option>
        <option value="Unemployment">Unemployment </option>
        <option value="Business Man">Business Man </option>
       </select>
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>Entry  </label>
              <input
                name="Entry"
                placeholder="Entry"
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Duration </label>
              <input
                name="Duration"
                placeholder="Duration"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>Processing Time </label>
              <input
                name="process"
                placeholder="Processing Time "
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Embassy Fee </label>
              <input
                name="coast"
                placeholder="Embassy Fee"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>Agent Fee </label>
              <input
                name="process"
                placeholder="Agent Fee"
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Agency Fee </label>
              <input
                name="coast"
                placeholder="Agency Fee"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>Service Charge </label>
              <input
                name="process"
                placeholder="Service Charge"
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Stya </label>
              <input
                name="stay"
                placeholder="Stay"
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
              <label>Requirement</label>
              <input
                name="requirement"
                placeholder="Requirement"
                type="text"
                className={styles.inputField}
              />
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

export default dynamic(() => Promise.resolve(Visa), { ssr: false });
