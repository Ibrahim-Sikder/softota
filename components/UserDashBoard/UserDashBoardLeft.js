import React, { useState } from 'react'
import style from './UserDashBoard.module.css'
import Link from 'next/link'
import { FaAngleDown} from 'react-icons/fa';
import Image from 'next/image';
import plane from '../../public/plane.png'
import user from '../../public/user.png';
import bank from '../../public/bank.png'
import company from '../../public/enterprise.png'
import payment from '../../public/cashless-payment.png'
import transaction from '../../public/transaction.png'
import passenger from '../../public/passenger.png'
import { FaUserAlt,FaPlane, FaCommentDollar, FaAmazonPay, FaHospitalUser, FaSkating, FaRegBuilding, FaHeadset ,FaSignOutAlt, FaAcquisitionsIncorporated } from "react-icons/fa";

const UserDashBoardLeft = () => {
  const [bookingListShow, setBookingListShow] = useState()
  const handleBooking = () =>{
    setBookingListShow(bookingListShow => !bookingListShow)
  }
  return (
    <div className={style.dashBoardLeftSide}>
          <div className={style.leftSideWrap}>
               <div onClick={handleBooking} className={style.bookingIcon}>
               <h5>Booking History</h5>
               <span ><FaAngleDown/></span>
               </div>
              
               <div  className={bookingListShow ? `${style.active}` : ''}>
               <ul className={style.bookingList}>
                    <li data-counter=''><Link href='/dashboard/flight'>Flight</Link></li>
                    <li data-counter=''><Link href='/dashboard'>Hotel</Link></li>
                    <li data-counter=''><Link href='/'>Visa</Link></li>
                    <li><Link href=''>Tours</Link></li>
                    <li><Link href=''>Buses</Link></li>
                    <li><Link href=''>Trains</Link></li>
               </ul>
               </div>
               <div>
                <ul className={style.profileInfo}>
                
                  <li>
                  <FaAcquisitionsIncorporated/>
                    <span></span>
                    <Link href='/dashboard/partial'><span>Partial Payment</span></Link>
                </li>
                <li>
                    <FaPlane className='text-white'/>
                    <span></span>
                    <Link href='/dashboard/returnChange'><span>Void/Return/Change</span></Link>
                </li>
                <li>
                    <FaCommentDollar className='text-white'/>
                    <Link href='/dashboard/transactions'><span>Transactions</span></Link>
                </li>
                <li>
                  <FaAmazonPay className='text-white' />
                   <Link href='/dashboard/payment'><span>Payment</span></Link>
                    
                </li>
                <li>
                    <FaHospitalUser className='text-white'/>
                    <Link href='/dashboard/banklist'><span>Bank List </span></Link>
                </li>
                <li>
                  <FaUserAlt/>
                    <Link href='/dashboard/profile'><span>Profile</span></Link>
                </li>
                <li>
                    <FaSkating className='text-white' />
                    <Link href='/dashboard/passenger'><span>Quick Passengers</span></Link>
                </li>
                <li>
                    <FaRegBuilding className='text-white'/>
                    <Link href='/dashboard/company'><span>Company</span></Link>
                  
                </li>
                </ul>
               </div>
               <div className={style.userService}>
                <ul className={style.profileInfo}>
                <li>
                <FaHeadset className='text-white'/>
                    <span>Customer Service</span>
                  
                </li>
                <li>
                   <FaSignOutAlt />
                    <span>Sign Out</span>
                  
                </li>
                </ul>
               </div>
             
          </div>
    </div>
  )
}

export default UserDashBoardLeft
