import React, { useState } from "react";
import ProfileLeftSide from "./profileLeftSide/ProfileLeftSide";
import Footer from "../../../components/Footer/Footer";
import style from "./userProfile.module.css";
import Image from "next/image";
import password from "../../../public/pass.png";
import styles from "./password.module.css";
import TextField from "@mui/material/TextField";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Nav from "../../../components/NavBarr/Nav";
const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
  const handleMouseDownPassword = () => {};
  return (
    <section>
     <Nav/>
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <ProfileLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
            <div className={styles.changePassWrap}>
              <div>
                <Image
                  src={password}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
                <div className={styles.changePassInputWrap}>
                  <TextField
                    className={styles.changePassInput}
                    required
                    id="outlined-required"
                    label="Old Password"
                    defaultValue="Old Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <div
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className={styles.showIcon}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                  <TextField
                    className={styles.changePassInput}
                    required
                    id="outlined-required"
                    label="New Password"
                    defaultValue="New Password"
                    type={showPassword2 ? "text" : "password"}
                  />
                  <div
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    className={styles.showIcon2}
                  >
                    {showPassword2 ? <FaEye /> : <FaEyeSlash />}
                  </div>

                  <TextField
                    className={styles.changePassInput}
                    required
                    id="outlined-required"
                    label="Re-new Password"
                    defaultValue="Re-new Password"
                    type={showPassword3 ? "text" : "password"}
                  />
                  <div
                    onClick={handleClickShowPassword3}
                    onMouseDown={handleMouseDownPassword}
                    className={styles.showIcon3}
                  >
                    {showPassword3 ? <FaEye /> : <FaEyeSlash />}
                  </div>
                  <div className={styles.updatedPassword}>
                    <button>Update Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Password;
