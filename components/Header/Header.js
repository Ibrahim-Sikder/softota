import React, { useRef } from 'react';
import style from './Header.module.css'
// import logo from '../../src/Assets/logo'
import { FaSistrix } from "react-icons/fa";

import TopBar from '../TopBar/TopBar';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {


  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList?.toggle("active");
    const navItems = document.querySelector(".navItems");
    navItems.classList.toggle("active");
  };

    return (
        <div>
          <TopBar></TopBar>
          <div className={style.header}>
            <div className={style.headerContent}>
              <div>
                <div className={style.logo}>
                {/* <Image
                    src={logo}
                    alt="Picture of the author"
                    width={500}
                    height={500}
               /> */}
                </div>
                <h5>About Us</h5>
            <nav className={style.navItems} ref={navRef}>
            <ul>
              <li>
                <Link href="/">Hajj & Umrah </Link>
              </li>
              <li>
                <Link href="/apartments">Flight </Link>
              </li>
              <li>
                <Link href="/reviews">Hotel</Link>
              </li>
              <li>
                <Link href="/about">Visa </Link>
              </li>
              <li>
                <Link href="/contactus">Tours</Link>
              </li>
              <li>
                <Link href="/contactus">Buses</Link>
              </li>
              <li>
                <Link href="/contactus">Trains </Link>
              </li>
            </ul>
          </nav>
          {/* humberger menu */}
          <div className={style.humberger} ref={navRef} onClick={showNavbar}>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </div>
                <div className='relative'>
                <input placeholder='Search right hotel, visa' className='relative bg-black' type="text" />
                <FaSistrix className={style.searchIcon}></FaSistrix>
                </div>
              </div>
             <div>
             <button>Log in</button>
              <button className={style.buttonTow}>Sign Up</button>
             </div>
            </div>
          </div>  
        </div>
    );
};

export default Header;