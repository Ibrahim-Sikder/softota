import Image from 'next/image'
import React from 'react'
import style from './userProfile.module.css'
import admin from '../../../public/admin.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfileLeftSide from './profileLeftSide/ProfileLeftSide'
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import ProfileRightSide from './ProfileRightSide/ProfileRightSide';

const Profile = () => {
     return (
          <section>
               <TopBar></TopBar>
               <Header></Header>
               <section className={style.accounWra}>
            <div className={style.profileWrap}>
                <div className={style.userProfileLeftSide}>
                    <ProfileLeftSide></ProfileLeftSide>
                </div>
                <div className={style.userProfileRightSide}>
                    <ProfileRightSide></ProfileRightSide>
                </div>
            </div>
          </section>
               <Footer/>
          </section>
        )
};

export default Profile;