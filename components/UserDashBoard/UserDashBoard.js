import React from 'react'
import style from './UserDashBoard.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { FaSistrix, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from './UserDashBoardLeft';
import UserDashBoardRight from './UserDashBoardRight';
import Link from 'next/link';
const UserDashBoard = () => {
  return (
   <div>
     <div>
          <div className={style.dasBoardTop}>
         
            <div className={style.logoWrap}>
           <Link href='/'> 
           <Image
            src={logo}
            alt="Picture of the author"
            width={100}
            height={100}
            className={style.logo}
            /></Link>
               <input type="text" placeholder='Search'/>
               <p className={style.searchIcon}><FaSistrix/></p>
               
            </div>

            <div className={style.userWrap}>
               <p><FaCommentAlt/></p>
               <p><FaHeadSideCoughSlash/></p>
               <p><FaUserCircle/></p>
               <p>Ibrahim Sikder</p>
               <p><FaEllipsisV/></p>
            </div>
          </div>
     </div>
      <div className={style.sideBarWrap}>
      <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={style.rightSideBar}>
          <UserDashBoardRight/>
      </div>
    </div>
   </div>
  )
}

export default UserDashBoard
