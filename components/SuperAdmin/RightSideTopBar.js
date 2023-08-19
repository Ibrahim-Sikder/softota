import React from 'react';
import style from '../UserDashBoard/UserDashBoard.module.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/ghuronti.jpg'
const RightSideTopBar = () => {
  return (
    <div>
      <div className={style.adminRightTopBara}>

      <div className={style.logoWrap}>
          <Link href='/admin'>
            <Image
              src={logo}
              alt='logo'
              width={200}
              height={200}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideTopBar;