import React from 'react'
import style from './DashBoard.module.css'
import Image from 'next/image';
import admin from '../../public/admin.png'
import Link from 'next/link';



const AdminLeftSide = () => {
  return (
    <div>
       <div className={style.AdminleftSide}>
               <div className='absolute left-24 top-52'>
                    <Image
                    src={admin}
                    alt="Picture of the author"
                    width={100}
                    height={100}       
                    />
                    <h2 className='text-white '>Ibrahim Sikder</h2>
               </div>
               <div className={style.adminBtn}>
                    <button>My Account</button>
               </div>
               <div className={style.adminBtn2}>
                    <Link href='/mybooking'><button>My Booking</button></Link>
               </div>
               <div className={style.adminBtn3}>
                    <button>Saved cards</button>
               </div>
               <div className={style.adminBtn4}>
                    <Link href='/deleteAccount'><button>Manage Your Data </button></Link>
               </div>
               <div className={style.adminBtn5}>
                    <button>My Account</button>
               </div>
               <div className={style.logOutBtn}>
                    <button>My Account</button>
               </div>
               </div>
    </div>
  )
}

export default AdminLeftSide
