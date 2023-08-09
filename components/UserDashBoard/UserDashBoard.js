import React from "react";
import style from "./UserDashBoard.module.css";

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
