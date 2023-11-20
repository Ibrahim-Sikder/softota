import React, { useContext, useState } from "react"
import Logo from "../../public/assets/logo.png"
import Link from "next/link"
import style from "./Nav.module.css"
import Image from "next/image"
import { useEffect } from "react"
import {
  Flight,
  Hotel,
  BookOnline,
  TransferWithinAStation,
  BusAlert,
  DirectionsRailway,
  LocalPhone,
} from "@mui/icons-material"
import Typewriter from "typewriter-effect"
import { useRef } from "react"

const Nav = () => {
  const [stickyMenu, setStickyMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(true)
  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu)
    navRef.current.classList.toggle("active")
  }
  const navRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={style.navBarMainWrap}>
      <div className={style.navbarMain}>
        <div className={style.navbarBanner}>
          <LocalPhone className={style.phoneIcon} />
          <h2>+88-01885-071-488</h2>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className={`${stickyMenu ? `${style.sticky}` : ` `}`}>
          <div className={style.navigationMain}>
            <div className={style.navigationContent}>
              <div className={style.navigationLeft}>
                <div className={style.logo}>
                  <Link href="/">
                    <Image
                      loading="lazy"
                      className={style.logoImg}
                      src={Logo}
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
                <Link
                  href="/aboutUs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={style.aboutHiden}>About Us</p>
                </Link>
              </div>

              <div className={style.inputDiv}>
                <Typewriter
                  className={style.typeWiter}
                  options={{
                    strings: [
                      "Search Flight, Hotel, Visa, & Tours package !",
                      "Search Tours, Buses, Trains , Hajj & Umrah package !",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <div className={style.inputButtons}>
                <Link
                  href="/login"
                  className={style.logInButton}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className={style.signUpButtonTwo}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* mobile menu */}
        <div onClick={toggleMobileMenu} ref={navRef} className={style.bar}>
          <div>
            <span className={mobileMenu ? ` ` : `${style.bar1}`}></span>
            <span className={mobileMenu ? ` ` : `${style.bar2}`}></span>
            <span className={mobileMenu ? ` ` : `${style.bar3}`}></span>
          </div>
        </div>
        <div className={style.mobileToggleSideMenu}>
          <div
            className={mobileMenu ? `${style.menuWraps}` : `${style.hideMenu}`}
          >
            <ul className={style.menu}>
              <div className={style.wrapMenu}>
                <Link href="/hajjUmra">
                  <li className={style.firstChild}>
                    <DirectionsRailway className={style.menuIcon} />

                    <p className="ml-3">Hajj & Umrah</p>
                  </li>
                </Link>
                <Link href="/flight">
                  <li className={style.activeLink}>
                    <Flight className={style.menuFlightIcon} />

                    <p className="ml-3">Flight</p>
                  </li>
                </Link>
                <Link href="/hotel">
                  <li>
                    <Hotel className={style.menuIcon} />

                    <p className="ml-3">Hotel</p>
                  </li>
                </Link>
                <Link href="/visa">
                  <li>
                    <BookOnline className={style.menuIcon} />

                    <p className="ml-3">Vissa</p>
                  </li>
                </Link>
                <Link href="/tours">
                  <li>
                    <TransferWithinAStation className={style.menuIcon} />

                    <p className="ml-3">Tours</p>
                  </li>
                </Link>
                <Link href="/bus">
                  <li>
                    <BusAlert className={style.menuIcon} />

                    <p className="ml-3">Buses</p>
                  </li>
                </Link>
                <Link href="/train">
                  <li className={style.lastChild}>
                    <DirectionsRailway className={style.menuIcon} />
                    <p className="ml-3">Trains</p>
                  </li>
                </Link>
              </div>
            </ul>
            <div className={style.securityInfo}>
              <Link href="/login">
                <button>Login</button>
              </Link>
              <Link href="/signup">
                <button className={style.signUpBtn}>Sign Up</button>
              </Link>
              <Link href="/aboutUs">
                <p>About Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav
