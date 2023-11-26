import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import style from '../../../../../components/Hotel/Hotel.module.css'
import { CloudUpload ,Groups2} from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; 
const Hotel = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  const [child, setChild] = useState(0)
  const [adult, setAdult] = useState(0)
  const [room, setRoom] = useState("1 Room")

  const childIncrement = () => {
    setChild(child + 1)
  }
  const childDecrement = () => {
    if (child < 1) {
      setChild(0)
    } else {
      setChild(child - 1)
    }
  }
  const incrementAdult = () => {
    setAdult(adult + 1)
  }
  const decrementAdult = () => {
    if (child < 1) {
      setAdult(0)
    } else {
      setAdult(child - 1)
    }
  }
  return (
    <B2BdashboardLayout>
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
                    <label>Hotel Name </label>
                    <input
                      name="country"
                      placeholder="Input Country "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Title </label>
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
                    <label>Sub Title </label>
                    <input
                      name="subtitle"
                      placeholder="Sub Title "
                      type="text"
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
                <h4>Enter Your Destination Country</h4>
                <select  className={styles.inputField}>
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
                <h4>City/Hotel/Street Name</h4>
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
                    <label>Day/Night </label>
                    <input
                      onChange={(e) => setDayNight(e.target.value)}
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Per Person </label>
                    <input
                      onChange={(e) => setPricePerson(e.target.value)}
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
                      onChange={(e) => setPriceTwinPerson(e.target.value)}
                      name="price"
                      placeholder="Price Twin Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Triple Person </label>
                    <input
                      onChange={(e) => setPriceTriplePerson(e.target.value)}
                      name="price"
                      placeholder="Price Triple Person"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Check In </label>
                    <input
                      name="checkIn"
                      placeholder="Check In  "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Check Out </label>
                    <input
                      name="checkout"
                      placeholder="Check Out "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                <div >
                <h4>Guests & Room</h4>
              <div  className={styles.mondalInputFiled} >
                <div>
              
                  <small>
                    {child + adult} Guest & {room}
                  </small>
                  <input  autoComplete="off" type="text" />
                </div>
              <div>

              <Groups2
                  onClick={() => window.my_modal_3.showModal()}
                  className={styles.showModalIcon}
                />
              </div>
              </div>
              {/* Open modala  */}
              <div className={styles.modalWrap} >
                <dialog id="my_modal_3" className={styles.modalWrap2}>
                  <form method="dialog" className="modal-box">
                    <button className={styles.hotelModalCloseBtn2}>✕</button>
                    <div className={style.guestRoomWrap}>
                      <Groups2 className={style.groupIcon} />
                      <div>
                        <small>Guest & Room </small> <br />
                        <p className="text-xl font-bold">
                          {" "}
                          {child + adult} Guest & {room}{" "}
                        </p>
                      </div>
                    </div>
                    <div className={style.adultChildWrap}>
                      <div className={style.adultIncrementDecrement}>
                        <small onClick={decrementAdult}> - </small>
                        <span>{adult} Adult </span>
                        <small onClick={incrementAdult}> + </small>
                      </div>
                      <div className={style.childIncrementDecrement}>
                        <small onClick={childDecrement}> - </small>
                        <span> {child} Child </span>
                        <small onClick={childIncrement}> + </small>
                      </div>
                    </div>
                    <select
                      className={styles.roomSelect2}
                      onChange={(e) => {
                        const classes = e.target.value
                        setRoom(classes)
                      }}
                    >
                      <option value="1 Room" selected>
                        1 Room
                      </option>
                      <option value="2 Room">2 Room</option>
                      <option value="3 Room">3 Room</option>
                      <option value="4 Room">4 Room</option>
                      <option value="5 Room">5 Room</option>
                    </select>
                  </form>
                </dialog>
              </div>
              
            </div>
                  <div>
                    <label>Hotel Type </label>
                    <input
                      name="type"
                      placeholder="Hotel Type "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                
                <div className={styles.formControl}>
                  <div>
                    <label>Highest Price </label>
                    <input
                      onChange={(e) => setHighestPrice(e.target.value)}
                      name="highestPrice"
                      placeholder="Highest Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Lowest Price </label>
                    <input
                      onChange={(e) => setLowestPrice(e.target.value)}
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
                      onChange={(e) => setStartPrice(e.target.value)}
                      name="startPrice"
                      placeholder="Start Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Discount Price </label>
                    <input
                      onChange={(e) => setDiscountPrice(e.target.value)}
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
                      onChange={(e) => setGetDate(e.target.value)}
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
               
                {/* <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {getFile[0]?.name ? (
                      <label for="files">{getFile[0]?.name}</label>
                    ) : (
                      <label for="files">
                        {" "}
                        <CloudUpload className={styles.uploadIcon} /> Image
                        Upload{" "}
                      </label>
                    )}

                    <input
                      onChange={handlePdf}
                      name="image"
                      // accept=".jpg/.jpeg/.png"
                      className={styles.inputField}
                      type="file"
                      id="files"
                      class="hidden"
                      multiple
                    />
                  </div>
                </div> */}
                <div className={styles.formControl}>
                  {" "}
                  <div>
                    <ReactQuill
                      value={value}
                      // onChange={setValue}
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

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
