import React from 'react';
import style from './ProfileRightSide.module.css'
import Image from 'next/image';
import admin from '../../../../public/admin.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
const ProfileRightSide = () => {
     const [age, setAge] = React.useState('');

     const handleChange = (event) => {
          setAge(event.target.value);
        };
  
     return (
          <div>
               <div className={style.userInfo}>
                    <div>
                    <Image
                    src={admin}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    className={style.userImg}
                    />
                    <div className={style.uploadImgWrap}>
                         <button>Remove Image </button>
                         <button>Upload Image </button>
                    </div>
                    </div>
                  
               </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="First Name"
               defaultValue="First Name"
                />
                <TextField
                 className={style.inputBtn}
               required
               id="outlined-required"
               label="Last Name"
               defaultValue="Last Name"
                />
          </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="Email"
               defaultValue="Email"
                />
                <TextField
                 className={style.inputBtn}
               required
               id="outlined-required"
               label="password"
               defaultValue="Password"
                />
          </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="Mobile Number"
               defaultValue="Mobile Number"
                />
               <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="Gender"
               defaultValue="Gender"
                />
          </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="Date of Birth "
               defaultValue="Date of Birth "
                />
                <TextField
                 className={style.inputBtn}
               required
               id="outlined-required"
               label="Nationality "
               defaultValue="Nationality "
                />
          </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="Passport Number "
               defaultValue="Passport Number"
                />
                <TextField
                 className={style.inputBtn}
               required
               id="outlined-required"
               label="Passport Expire Date "
               defaultValue="Passport Expire Date "
                />
          </div>
          <div className={style.inputGroupWrap}>
            <TextField
               className={style.inputBtn}
               required
               id="outlined-required"
               label="First Name"
               defaultValue="First Name"
                />
                <TextField
                 className={style.inputBtn}
               required
               id="outlined-required"
               label="Last Name"
               defaultValue="Last Name"
                />
          </div>
          <div className={style.saveBtn}>
               <button>Save Your Information </button>
          </div>
          </div>
     );
};

export default ProfileRightSide;