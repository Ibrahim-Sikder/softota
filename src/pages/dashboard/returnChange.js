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
import Link from 'next/link';
const returnChange = () => {
     return (
          <div>

               <div className={style.sideBarWrap}>
                    <div className={style.leftSideBar}>
                         <UserDashBoardLeft />
                    </div>
                    <div className={styles.returnChangeBookInfo}>
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
                                                                 <th >PNR</th>
                                                                 <th>Booked </th>
                                                                 <th>Created At </th>
                                                                 <th>Request Code  </th>
                                                                 <th>Booking Code </th>
                                                                 <th>Request Type  </th>
                                                                 <th>Status   </th>
                                                                 <th>Details</th>
                                                            </tr>

                                                       </thead>
                                                       <tbody>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-[#4AB449] text-white font-xs text-xs px-3 rounded'> Completed</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/completed'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded '> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-red-500 text-white font-xs text-xs px-3 rounded'> Decline By Agency</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/cancel'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-[#4AB449] text-white font-xs text-xs px-3 rounded'> Completed</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/completed'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded '> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-red-500 text-white font-xs text-xs px-3 rounded'> Decline By Agency</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/cancel'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-[#4AB449] text-white font-xs text-xs px-3 rounded'> Completed</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/completed'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded '> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-red-500 text-white font-xs text-xs px-3 rounded'> Decline By Agency</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/cancel'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-[#4AB449] text-white font-xs text-xs px-3 rounded'> Completed</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/completed'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded '> View</span></Link> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>WBZCTH</td>
                                                                 <td >Global04 </td>
                                                                 <td>04 Mar 2023</td>
                                                                 <td>CHANGE-6403091864602</td>
                                                                 <td> GTRN164091864602 </td>
                                                                 <td>Change </td>
                                                                 <td > <span className='bg-red-500 text-white font-xs text-xs px-3 rounded'> Decline By Agency</span></td>
                                                                 <td className='cursor-pointer'><Link href='/b2bsearch/cancel'> <span className='bg-[#19ABE3] text-white font-xs text-xs px-3 rounded'> View</span></Link> </td>
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

export default dynamic(() => Promise.resolve(returnChange), { ssr: false });