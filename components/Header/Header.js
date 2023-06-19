"use client"

import style from './Header.module.css'
import logo from '../../public/logo.png'
import { FaSistrix } from "react-icons/fa";
import TopBar from '../TopBar/TopBar';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

const Header = () => {


  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("active");
    const navItems = document.querySelector(".navItems");
    navItems?.classList.toggle("active");
  };


    return (
        <div>
  
          <TopBar></TopBar>
          
          <div className={style.header}>
            <div className={style.headerContent}>
              <div>
                <div className={style.logo}>
               <Link href='/'> 
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={500}
                    height={500}
               /></Link>
                </div>
               <Link href='/aboutUs'> <h5>About Us</h5></Link>
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
                <input placeholder='Search right hotel, visa' className='relative bg-black left-[500px]' type="text" />
                <FaSistrix className={style.searchIcon}></FaSistrix>
                </div>
              </div>
             <div>
             <Link href='/login'><button>Log in</button></Link>
              <Link href='/signup'><button className={style.buttonTow}>Sign Up</button></Link>
             </div>
            </div>
          </div>  
        </div>
    );
};

export default Header;

