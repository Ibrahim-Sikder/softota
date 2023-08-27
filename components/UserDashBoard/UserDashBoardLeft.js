import React, { useState } from "react";
import style from "./UserDashBoard.module.css";
import Link from "next/link";
import {
  FaUserAlt,
  FaPlane,
  FaCommentDollar,
  FaAmazonPay,
  FaHospitalUser,
  FaSkating,
  FaRegBuilding,
  FaHeadset,
  FaSignOutAlt,
  FaAcquisitionsIncorporated,
} from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Beenhere,
  NotificationsActive,
  Flight,
  Hotel,
  Diversity2,
  DirectionsBusFilled,
  Train,
  Replay5,
  AirplaneTicket,
  Spellcheck,
  CancelScheduleSend
} from "@mui/icons-material";

const UserDashBoardLeft = () => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const showSidebar = () => {
    setToggleSideBar((toggleSideBar) => !toggleSideBar);
  };

  return (
    <aside>
      <div
        className={toggleSideBar ? `${style.sidebar}` : `${style.sideBarLeft}`}
      >
        <div
          className={
            toggleSideBar ? `${style.active}` : `${style.dashBoardLeftSide}`
          }
        >
          <div className={style.leftSideWrap}>
            <div className={style.customerInfo}>
              <span>Agent </span>
              <strong>GT102490</strong> <br />
              <small>Ghuronti.com (STA-102490)</small>
              <button>Check Balance</button>
              <NotificationsActive className={style.notification} />
            </div>
            
            <Accordion className={style.bookingHistory}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>

                  <div className={style.bookHistory}>
                    <h6><Replay5 className={style.historyIcon} /> Booking History</h6>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={style.bookingList}>
                    <ul >
                      <li > 
              <Accordion className={style.subAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                <div className={style.ticketProcessing}>
                <Flight className={style.flightIcon} /><span>Flight</span>
                </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails  className={style.ticketSubMenu}>
                  <Typography>
                    <ul>
                    <li className='flex'><Link href='/b2bsearch/flight'><AirplaneTicket className={style.flightIcons} />Confirm Ticket </Link></li>
                    <li className='flex'><Link href='/b2bsearch/process'><Spellcheck className={style.flightIcons} />On Hold Process</Link></li>
                      <li className='flex'><Link href='/b2bsearch/ticketcancel'><CancelScheduleSend className={style.flightIcons} />Cancel Ticket</Link></li>
                    </ul>
                  </Typography>
                </AccordionDetails>
               
              </Accordion>     
              </li>
                       <li ><Hotel className={style.flightIcons} />  Hotel</li>
                       <li ><Beenhere className={style.flightIcons} />  Visa</li>
                       <li > <Diversity2 className={style.flightIcons} />  Tours</li>
                       <li > <DirectionsBusFilled className={style.flightIcons} />  Buses</li>
                       <li > <Train className={style.flightIcons} />  Trains</li>
                    </ul>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <div>
              <ul className={style.profileInfo}>
                <li>
                  <FaAcquisitionsIncorporated />
                  <Link href="/b2bsearch/partial">
                    <span>Partial Payment</span>
                  </Link>
                </li>
                <li>
                  <FaPlane className="text-white" />
                  <Link href="/b2bsearch/returnChange">
                    <span>Void/Return/Change</span>
                  </Link>
                </li>
                <li>
                  <FaCommentDollar className="text-white" />
                  <Link href="/b2bsearch/transactions">
                    <span>Transactions</span>
                  </Link>
                </li>
                <li>
                  <FaAmazonPay className="text-white" />
                  <Link href="/b2bsearch/payment">
                    <span>Payment</span>
                  </Link>
                </li>
                <li>
                  <FaHospitalUser className="text-white" />
                  <Link href="/b2bsearch/banklist">
                    <span>Bank List </span>
                  </Link>
                </li>
                <li>
                  <FaUserAlt />
                  <Link href="/b2bsearch/profile">
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <FaSkating className="text-white" />
                  <Link href="/b2bsearch/passenger">
                    <span>Quick Passengers</span>
                  </Link>
                </li>
                <li>
                  <FaRegBuilding className="text-white" />
                  <Link href="/b2bsearch/company">
                    <span>Company</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.userService}>
              <ul className={style.profileInfo}>
                <li>
                  <FaHeadset className="text-white" />
                  <span>Customer Service</span>
                </li>
                <li>
                  <FaSignOutAlt />
                  <span>Sign Out</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={toggleSideBar ? `${style.leftSideIconWrap}` : `${style.iconsBarHide}`} >
            <div>
              <p className={style.showToolTip}><Replay5 className={style.icon} />
                <Link href=''><div className={`${style.toolTip} ${style.mainToolTip}`}>
                <Accordion className={style.bookingHistory}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='mt-5' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>

                  <div className={style.bookHistory}>
                    <h6><Replay5 className={style.historyIcon} /> Booking History</h6>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={style.bookingList}>
                    <ul >
                      <li > 
              <Accordion className={style.subAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='-mt-5 -ml-5' />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                <div className={style.ticketProcessing}>
                <Flight className={style.flightIcon} /><span>Flight</span>
                </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails  className={style.ticketSubMenu}>
                  <Typography>
                    <ul>
                    <li className='flex'><Link href='/b2bsearch/flight'><AirplaneTicket className={style.flightIcons} />Confirm Ticket </Link></li>
                    <li className='flex'><Link href='/b2bsearch/process'><Spellcheck className={style.flightIcons} />On Hold Process</Link></li>
                      <li className='flex'><Link href='/b2bsearch/ticketcancel'><CancelScheduleSend className={style.flightIcons} />Cancel Ticket</Link></li>
                    </ul>
                  </Typography>
                </AccordionDetails>
               
              </Accordion>     
              </li>
              <li ><Hotel className={style.flightIcons} />  Hotel</li>
                       <li ><Beenhere className={style.flightIcons} />  Visa</li>
                       <li > <Diversity2 className={style.flightIcons} />  Tours</li>
                       <li > <DirectionsBusFilled className={style.flightIcons} />  Buses</li>
                       <li > <Train className={style.flightIcons} />  Trains</li>
                    </ul>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
                </div> </Link>

              </p>
              <p className={style.showToolTip}><FaAcquisitionsIncorporated className={style.icon} />
                <Link href='/b2bsearch/partial'><div className={style.toolTip}>Partial Payment</div> </Link>
              </p>


              <p className={style.showToolTip}><FaPlane className={style.icon} />
                <Link href='/b2bsearch/returnChange'><div className={`${style.toolTip} ${style.toolTip2}`}>Void/Return /Change</div> </Link>
              </p>

              <p className={style.showToolTip}><FaCommentDollar className={style.icon} />
                <Link href='/adb2bsearchmin/transactions'><div className={`${style.toolTip} ${style.toolTip3}`}>Transactions</div> </Link>
              </p>
              <p className={style.showToolTip}><FaAmazonPay className={style.icon} />
                <Link href='/b2bsearch/payment'><div className={`${style.toolTip} ${style.toolTip4}`}>Payment </div> </Link>
              </p>
              <p className={style.showToolTip}><FaHospitalUser className={style.icon} />
                <Link href='/b2bsearch/banklist'><div className={`${style.toolTip} ${style.toolTip5}`}>Bank List</div> </Link>
              </p>
              <p className={style.showToolTip}><FaUserAlt className={style.icon} />
                <Link href='/b2bsearch/profile'><div className={`${style.toolTip} ${style.toolTip6}`}>Profile </div> </Link>
              </p>
              <p className={style.showToolTip}><FaUserAlt className={style.icon} />
                <Link href='/b2bsearch/passenger'><div className={`${style.toolTip} ${style.toolTip7}`}>Quick Passengers</div> </Link>
              </p>
              <p className={style.showToolTip}><FaSkating className={style.icon} />
                <Link href='/b2bsearch/company'><div className={`${style.toolTip} ${style.toolTip8}`}>Company</div> </Link>
              </p>

            </div>
          </div>
          {/* tooltip */}

          <div onClick={showSidebar} className={style.bar}>
            <div>
              <span className={toggleSideBar ? ` ` : `${style.bar1}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar2}`}></span>
              <span className={toggleSideBar ? ` ` : `${style.bar3}`}></span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserDashBoardLeft;
