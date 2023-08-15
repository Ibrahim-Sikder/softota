import React, { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import style from "./Nav.module.css";
import Image from "next/image";
import { useEffect } from "react";
const Nav = () => {
  const [mobActive, setMobActive] = useState(0);
  const [stickyMenu, setStickyMenu] = useState('bg-red-600')
  useEffect(() => {
const handleScroll = ()=>{
  setStickyMenu(window.scrollY > 50)
}
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll)
  }, []);


  return (
    <div className={style.navbarMain}>
      <div className={style.navbarBanner}>
        <svg
          className="text-[#4AB449]"
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="#4AB449"
        >
          <path
            fill="#4AB449"
            fillRule="evenodd"
            d="M5.497 2.4c-.036-.001-.142.007-.305.135-.319.254-1.18 1.027-1.954 1.87-.386.422-.726.835-.962 1.19-.117.178-.195.32-.24.427A.704.704 0 0 0 2 6.121v.002c.014.51.05 1.83.972 4.06.95 2.3 2.854 5.595 6.696 9.96 3.845 4.37 6.736 6.522 8.732 7.587 1.82.971 2.918 1.052 3.38 1.07l.01-.005c.077-.042.193-.123.348-.255.308-.263.67-.648 1.042-1.088a22.336 22.336 0 0 0 1.652-2.23v-.002a.976.976 0 0 0 .165-.578.448.448 0 0 0-.022-.115c-.573-.446-4.451-3.375-5.142-3.871a1.152 1.152 0 0 0-.44.168l-.003.002c-.258.154-.906.568-1.509.956l-.783.506-.336.218-.546-.838-.555.832-.002-.002-.003-.002-.007-.004-.021-.015a7.847 7.847 0 0 1-.3-.224c-.2-.157-.489-.395-.866-.735-.755-.68-1.864-1.767-3.326-3.428-1.462-1.66-2.418-2.92-3.013-3.774a18.538 18.538 0 0 1-.643-.978 8.98 8.98 0 0 1-.193-.333l-.011-.023-.004-.007-.002-.003v-.001s-.001-.001.888-.46l-.893-.45.192-.383.446-.89c.34-.683.707-1.423.844-1.72v-.002c.108-.23.164-.441.18-.6a.58.58 0 0 0-.002-.175A536.66 536.66 0 0 0 5.497 2.4Zm2.662 10.111-.893-.45-.23.456.234.453.889-.459Zm1.138-.039c.112.178.265.411.467.7.55.788 1.458 1.988 2.874 3.597 1.417 1.61 2.473 2.641 3.163 3.263.182.164.339.3.47.41l.528-.341c.59-.38 1.273-.817 1.567-.993.366-.22.777-.381 1.197-.434.417-.053.917-.005 1.353.297.548.382 4.971 3.725 5.351 4.027.466.37.683.953.725 1.489a2.968 2.968 0 0 1-.456 1.783c-.282.458-1.024 1.521-1.827 2.472-.401.475-.843.953-1.27 1.318a4.15 4.15 0 0 1-.688.49c-.227.124-.56.266-.945.252h-.002c-.602-.022-2.043-.08-4.345-1.308-2.268-1.21-5.341-3.54-9.292-8.029-3.952-4.49-5.99-7.971-7.043-10.518C.064 8.38.02 6.795.001 6.15V6.15c-.01-.343.088-.66.193-.906a4.72 4.72 0 0 1 .415-.752c.317-.48.735-.98 1.155-1.437.838-.914 1.776-1.76 2.185-2.085C5.046.1 6.505.255 7.145 1.26c.31.488 3.218 5.498 3.538 6.072.244.438.277.927.236 1.333-.042.42-.171.847-.355 1.242a93.3 93.3 0 0 1-.87 1.773l-.396.791Zm6.92 9.196-.555.832.548.366.553-.36-.546-.838Z"
            clipRule="evenodd"
          />
        </svg>
        <h2>+88-01885-071-488</h2>
        <p>Contact Us</p>
      </div>
    <div className={`${stickyMenu ? `${style.sticky}` : ` ` }`}>
    <div className={style.navigationMain}>
        <div className={style.navigationContent}>
          <div className={style.navigationLeft}>
            <div  className={style.logo}>
           <Link href='/'>
           <Image
              src={Logo}
              alt="Picture of the author"
            />
           </Link>
            </div>
            <Link
              href="/aboutUs"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>About Us</p>
            </Link>
          </div>
          <div className={style.inputDiv}>
            <input type="text" placeholder="Search Flight, Hotal, Visa" />
            <div className={style.inputIcon}></div>
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
      {mobActive === 0 ? (
        <div className={style.navigationMOb}>
          <Image
            src={Logo}
            alt="Picture of the author"
            width={50}
            height={50}
            className={style.mobLogo}
          />
          <div className={style.iconsMobNav}>
            <FlightTakeoffIcon
              className={style.takeOf}
              onClick={() => setMobActive(1)}
            />
          </div>
        </div>
      ) : (
        <div className={style.activeNavMob}>
          <div className={style.iconsMobNav}>
            <FlightLandIcon
              className={style.landOf}
              onClick={() => setMobActive(0)}
            />
          </div>
          <Link
            href="/aboutUs"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>About Us</p>
          </Link>
          <div className={style.inputDivMOb}>
            <input type="text" placeholder="Search Flight, Hotal, Visa" />
            <div className={style.inputIcon}></div>
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
      )}
    </div>
  );
};

export default Nav;
