import React from "react"
import style from "../../../../components/SearhPage/HotelBook/HotelBook.module.css"
import dynamic from "next/dynamic"
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText"
import B2bHotelBookLeftSide from "../../../../components/SearhPage/HotelBook/BookLeftSide/B2bHotelBookLeftSide"
import B2bHotelBookRightSide from "../../../../components/SearhPage/HotelBook/RightSide/B2bHotelBookRightSide"
const Hotel = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <B2bHotelBookLeftSide />
        </div>
        <div className={style.flightBookRightSide}>
          <B2bHotelBookRightSide />
        </div>
      </div>
    </B2BdashboardLayout>
  )
}

export default dynamic(() => Promise.resolve(Hotel), { ssr: false })
