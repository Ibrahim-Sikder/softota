import React from "react";
import style from "../../../../../components/UserDashBoard/UserDashBoard.module.css";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import UserDashBoardLeft from "../../../../../components/SuperAdmin/UserDashBoardLeft";
import RightSideTopBar from "../../../../../components/SuperAdmin/RightSideTopBar";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";

const hotel = () => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
  };


  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={styling.bankListInfo}>
          <RightSideTopBar />
          <MoveText />

          <div className="mt-5">
            <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
                <h2 className="text-3xl font-bold text-center">
                  Hotel Data Input{" "}
                </h2>
                <div className="w-full mx-auto">
                  <form>
                    <div className={styles.formControl}>
                      <div>
                        <label>Input Country </label>
                        <input
                          name="country"
                          placeholder="Input Country "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Input City </label>
                        <input
                          name="city"
                          placeholder="Input City "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Day/Night </label>
                        <input
                          name="day"
                          placeholder="Day/Night "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Price Per Person </label>
                        <input
                          name="price"
                          placeholder="Price Person "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Price Twin Person</label>
                        <input
                          name="price"
                          placeholder="Price Twin Person "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Price Triple Person </label>
                        <input
                          name="price"
                          placeholder="Price Triple Person"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Highest Price </label>
                        <input
                          name="highestPrice"
                          placeholder="Highest Price "
                          type="number"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Lowest Price </label>
                        <input
                          name="lowestPrice"
                          placeholder="Lowest Price "
                          type="number"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                    <div className={styles.formControl}>
                      <div>
                        <label>Start Price </label>
                        <input
                          name="startPrice"
                          placeholder="Start Price "
                          type="number"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label> Discount Price </label>
                        <input
                          name="discountPrice"
                          placeholder="Discount Price "
                          type="number"
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
                        <label>Address</label>
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
                        <label> Title </label>
                        <input
                          name="title"
                          placeholder="Title"
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label>Sub Title </label>
                        <input
                          name="subtitle"
                          placeholder="Sub Title "
                          type="text"
                          className={styles.inputField}
                        />
                      </div>
                     
                    </div>
                    <div className={styles.formControl}>
                    <div>
                        <label>Hotel Name </label>
                        <input
                          name="name"
                          placeholder="Hotel Name "
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

export default dynamic(() => Promise.resolve(hotel), { ssr: false });
