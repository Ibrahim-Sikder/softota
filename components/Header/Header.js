import React from 'react'
import style from './Header.module.css';
import logo from '../../public/logo.png'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <div className={style.header}>
     <div className={style.headerWrap}>
          <div className={style.logo}>
               <Image
               className={style.logoImg}
               src={logo}
               width={100}
               height={100}
               alt='logo'
               />
               <Link href='/aboutUs'><h4>About</h4></Link>
          </div>
         
          <div className={style.searchBox}>
               <input placeholder='Search Flight, Hotel, Visa'/>
          </div>
          <div className={style.inputBox}>
              <Link href='/login'> <button className='mr-3'>Login</button></Link>
              <Link href='/signup'> <button className='mr-3'>Sign Up</button></Link>
          </div>
     </div>
    </div>
  )
}

export default Header
