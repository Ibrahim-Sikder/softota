import React, { useContext, useState } from "react";
import style from "./Header.module.css";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { AuthContext } from "../../src/pages/context/AuthContext/AuthProvider";
const Header = () => {
  const [active, setActive] = useState(0);
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className={style.header}>
      <div className={style.headerWrap}>
        {active === 0 ? (
          <div className={style.toggleBtnWrap}>
            <div>
              <FaPlaneDeparture
                className={style.toggleBtn}
                onClick={() => setActive(1)}
              />
            </div>
            <div className={style.imgWrap}>
              <Link href="/">
                <Image
                  className={style.logoImg2}
                  src={logo}
                  width={220}
                  height={100}
                  alt="logo"
                />
              </Link>
              <Link href="/aboutUs">
                <h4 className={style.about}>About</h4>
              </Link>
            </div>
            <div className={style.searchBox}>
              <input placeholder="Search Flight, Hotel, Visa" />
            </div>
            <div className={style.inputBox}>
              {user?.uid ? (
                <Link href="/login">
                  {" "}
                  <button onClick={handleLogOut} className={style.loginBtn}>
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  {" "}
                  <button className={style.loginBtn}>Login</button>
                </Link>
              )}
              <Link href="/signup">
                {" "}
                <button className={style.signupBtn}>Sign Up</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className={style.logoWrap}>
            <Link href="/">
              <Image
                className={style.logoImg}
                src={logo}
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
            <div className={style.toggleBtn2}>
              {" "}
              <FaPlaneArrival onClick={() => setActive(0)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
