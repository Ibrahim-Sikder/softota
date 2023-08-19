import React from "react";
import style from '../../components/UserDashBoard/UserDashBoard.module.css'
import UserDashBoardLeft from "./UserDashBoardLeft";
import UserDashBoardRight from "./UserDashBoardRight";

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
