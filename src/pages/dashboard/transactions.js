import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt, FaHeadSideCoughSlash, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
import dynamic from "next/dynamic";
const transactions = () => {
     return (
          <div>
               <div>

               </div>
               <div className={style.sideBarWrap}>
                    <div className={style.leftSideBar}>
                         <UserDashBoardLeft />
                    </div>
                    <div className={styles.transitionInfo}>
                         <div>
                              <div className={styles.profileTop}>
                                   <RightSideTopBar />
                                   <div className={style.moveText}>
                                        <marquee
                                             onmouseout="this.start()"
                                             onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! </h2></marquee>
                                   </div>
                                  <div className="mt-5">
                                  <div className={styles.flightHistory}>
                                        <div className="overflow-x-auto ">
                                             <table className="table  lg:table-auto columns-xl break-after-column">
                                                  <thead className={style.tableWrap}>
                                                       <tr>
                                                            <th >Source</th>
                                                            <th>Payment Type </th>
                                                            <th>Ticket  Booking  Invoice Number </th>
                                                            <th>Reference ID  </th>
                                                            <th>Debit </th>
                                                            <th>Credit</th>
                                                            <th>Status  </th>
                                                            <th>Created  </th>
                                                            <th>Details </th>
                                                       </tr>

                                                  </thead>
                                                  <tbody>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                       <tr>
                                                            <td>Flight</td>
                                                            <td >Flight Booking </td>
                                                            <td>(Not Set) </td>
                                                            <td>GTRN16797234601596</td>
                                                            <td> 601596 </td>
                                                            <td>0</td>
                                                            <td>Approved </td>
                                                            <td>29 Mar 2023 16:08</td>
                                                            <td><span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'>View</span> </td>
                                                          

                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                   </div>
                                  </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default dynamic(() => Promise.resolve(transactions), { ssr: false });