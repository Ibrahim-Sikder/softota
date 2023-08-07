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
import { Beenhere,NotificationsActive ,Flight, Hotel, Diversity2, DirectionsBusFilled,Train, Replay5} from '@mui/icons-material';


const UserDashBoardLeft = () => {
  const [toggleSideBar, setToggleSideBar] = useState()
  const showSidebar = ()=>{
    setToggleSideBar(toggleSideBar => !toggleSideBar)
  }

  return (
   <div >
     <div className={toggleSideBar ? `${style.dashBoardLeftSide}` : `${style.active}` }  >
          <div className={style.leftSideWrap}>
          <div onClick={showSidebar} className={style.bar}>
              <div>
              <span></span>
              <span></span>
              <span></span>
              </div>
            </div>

          <div className={style.customerInfo}>
            <span>Agent </span>
            <strong>ST102490</strong> <br />
            <small>Ghuronti.com (STA-102490)</small>
            <button>Check Balance</button>
          <NotificationsActive className={style.notification} />
          
          </div>
          

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
         
         <div className={style.bookHistory}>
         <h6><Replay5 className={style.historyIcon}/> Booking History</h6>
         </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={style.bookingList}>
               <ul >
                    <li > <Link href='/dashboard/flight'><Flight className={style.flightIcon}/> Flight</Link></li>
                    <li ><Link href='/dashboard'><Hotel  className={style.flightIcons}/>  Hotel</Link></li>
                    <li><Link href='/'><Beenhere className={style.flightIcons}/>  Visa</Link></li>
                    <li><Link href=''><Diversity2 className={style.flightIcons}/>  Tours</Link></li>
                    <li><Link href=''><DirectionsBusFilled className={style.flightIcons}/>  Buses</Link></li>
                    <li><Link href=''><Train className={style.flightIcons}/>  Trains</Link></li>
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
          <div className={toggleSideBar ? `${style.none}` : `${style.leftSideIconWrap}`} >
           <div>
           <p><Flight className={style.icon}/></p>
            <p><Hotel className={style.icon}/></p>
            <p><Diversity2 className={style.icon}/></p>
            <p><DirectionsBusFilled className={style.icon}/></p>
            <p><Train className={style.icon}/></p>
            <p><Beenhere className={style.icon}/></p>
            <p><Replay5 className={style.icon}/></p>
           </div>
          
          
          </div>
    </div>
   </div>
  )
}

export default UserDashBoardLeft
