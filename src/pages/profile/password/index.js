import React from 'react';

import styles from './password.module.css'
import Image from "next/image";
import password from "../../../../public/assets/pass.png";
import TextField from "@mui/material/TextField";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from 'react';
import B2CDashboardLayout from '../../../../components/Layout/B2CDashboardLayout/B2CDashboardLayout';
const Password = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
    const handleMouseDownPassword = () => {};
    return (
        <B2CDashboardLayout>
             <div className={styles.changePassWrap}>
              <div>
                <Image
                loading="lazy"
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
        </B2CDashboardLayout>
    );
};

export default Password;