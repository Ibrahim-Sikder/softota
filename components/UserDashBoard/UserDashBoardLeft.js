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
import { FaUserAlt,FaPlane } from "react-icons/fa";
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
              
               <div  className={bookingListShow ? `hidden` : ''}>
               <ul className={style.bookingList}>
                    <li data-counter=''><Link href='/dashboard/flight'>Flight</Link></li>
                    <li data-counter=''><Link href='/dashboard'>Hotel</Link></li>
                    <li data-counter=''><Link href='/'>Visa</Link></li>
                    <li><Link href='/'>Tours</Link></li>
                    <li><Link href='/'>Buses</Link></li>
                    <li><Link href='/'>Trains</Link></li>
               </ul>
               </div>
               <div>
                <ul className={style.profileInfo}>
                
                  <li>
                  <FaPlane/>
                    <span></span>
                    <Link href='/dashboard/partial'><span>Partial Payment</span></Link>
                </li>
                <li>
                    <FaPlane/>
                    <span></span>
                    <Link href='/dashboard/returnChange'><span>Void/Return/Change</span></Link>
                </li>
                <li> <Image
                    src={transaction}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
                    <Link href='/dashboard/transactions'><span>Transactions</span></Link>
                </li>
                <li> <Image
                    src={payment}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
                   <Link href='/dashboard/payment'><span>Payment</span></Link>
                    
                </li>
                <li> <Image
                    src={bank}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
                    <Link href='/dashboard/banklist'><span>Bank List </span></Link>
                </li>
                <li>
                  <FaUserAlt/>
                    <Link href='/dashboard/profile'><span>Profile</span></Link>
                </li>
                <li> <Image
                    src={passenger}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
                    <Link href='/dashboard/passenger'><span>Quick Passengers</span></Link>
                </li>
                <li> <Image
                    src={company}
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    />
                    <Link href='/dashboard/company'><span>Company</span></Link>
                  
                </li>
                </ul>
               </div>
               <div className={style.userService}>
                <ul className={style.profileInfo}>
                <li>
                <FaUserAlt/>
                    <span>Customer Service</span>
                  
                </li>
                <li>
                   <FaUserAlt/>
                    <span>Sign Out</span>
                  
                </li>
                </ul>
               </div>
             
          </div>
    </div>
  )
}

export default UserDashBoardLeft
