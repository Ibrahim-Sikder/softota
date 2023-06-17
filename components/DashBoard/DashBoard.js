import React from 'react'
import style from './DashBoard.module.css';
import Image from 'next/image';
import admin from '../../public/admin.png'

const DashBoard = () => {
  return (
    <section>
      <div className='grid grid-cols-12'>
          <div  className='cols-span-10'>
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
                    <button>My Booking</button>
               </div>
               <div className={style.adminBtn3}>
                    <button>Saved cards</button>
               </div>
               <div className={style.adminBtn4}>
                    <button>Manage Your Data </button>
               </div>
               <div className={style.adminBtn5}>
                    <button>My Account</button>
               </div>
               <div className={style.logOutBtn}>
                    <button>My Account</button>
               </div>
               </div>
          </div>
          <div>
              
          </div>
      </div>
    </section>
  )
}

export default DashBoard
