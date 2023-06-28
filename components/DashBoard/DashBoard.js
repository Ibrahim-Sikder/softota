import React from 'react'
import style from './DashBoard.module.css';
import Image from 'next/image';
import admin from '../../public/admin.png'
import clock from '../../public/clock.png'
import clock2 from '../../public/clock2.png'
import clock3 from '../../public/clock3.png'
import clock4 from '../../public/clock4.png'
import clock5 from '../../public/clock5.png'
import AdminLeftSide from './AdminLeftSide';
import AdminRightSide from './AdminRightSide';

const DashBoard = () => {
  return (
    <section className={style.dashboardWrap}>
      <div className='grid grid-cols-12'>
          <div>
              <AdminLeftSide></AdminLeftSide>
          </div>
          <div className='col-span-9'>
              <AdminRightSide></AdminRightSide>
          </div>
      </div>
    </section>
  )
}

export default DashBoard
