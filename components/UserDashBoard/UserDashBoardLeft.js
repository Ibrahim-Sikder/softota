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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Beenhere ,Flight, Hotel, Diversity2, DirectionsBusFilled,Train} from '@mui/icons-material';


const UserDashBoardLeft = () => {

  return (
    <div className={style.dashBoardLeftSide}>
          <div className={style.leftSideWrap}>
               
               <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <div className={style.bookingIcon}>
               <h5>Booking History</h5>
               </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={style.bookingList}>
               <ul >
                    <li > <Link href='/dashboard/flight'><Flight className={style.flightIcon}/> Flight</Link></li>
                    <li ><Link href='/dashboard'><Hotel/>  Hotel</Link></li>
                    <li><Link href='/'><Beenhere/>  Visa</Link></li>
                    <li><Link href=''><Diversity2/>  Tours</Link></li>
                    <li><Link href=''><DirectionsBusFilled/>  Buses</Link></li>
                    <li><Link href=''><Train/>  Trains</Link></li>
               </ul>
               </div>
          </Typography>
        </AccordionDetails>
      </Accordion>




               <div>

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
