import React from "react";
import style from "./UserDashBoard.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  FaSistrix,
  FaCommentAlt,
  FaHeadSideCoughSlash,
  FaUserCircle,
  FaEllipsisV,
} from "react-icons/fa";
import UserDashBoardLeft from "./UserDashBoardLeft";
import UserDashBoardRight from "./UserDashBoardRight";
import Link from "next/link";
const UserDashBoard = () => {
  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <UserDashBoardRight />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
