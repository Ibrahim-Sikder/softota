import React from 'react';
import Image from 'next/image';
import admin from '../../../../public/admin.png'
import Link from 'next/link';
import style from './profile.module.css'
const ProfileLeftSide = () => {
     return (
          <div>
             <div className={style.userProfileLeftSide}>
               <div className={style.userImg}>
                    <div>
                    <Image
                    src={admin}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    />
                    <h5 className='text-white mt-3'>Ibrahim Sikder</h5>
                    </div>
               </div>
               <div className={style.userInfo}>
                  <div>
                  <Link href=''><p>My Account </p></Link>     
                   <Link href=''><p>My Booking </p></Link>     
                   <Link href=''><p>Change Password </p></Link>     
                   <Link href=''><p>Save Cards </p></Link>     
                   <Link href=''><p>Manage Your Data  </p></Link>
               </div>    
               </div>
                    <div className={style.logOutBtn}>
                       <button className={style.userLogoutBtn}>Log Out</button>
                    </div>
              </div>
          </div>
        )
};

export default ProfileLeftSide;