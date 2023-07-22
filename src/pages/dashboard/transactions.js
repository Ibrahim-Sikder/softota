import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const transactions = () => {
     return (
          <div>
     <div>
          <div className={style.dasBoardTop}>
         
            <div className={style.logoWrap}>
            <Image
            src={logo}
            alt="Picture of the author"
            width={80}
            height={20}
            className={style.logo}
            />
               <input type="text" placeholder='Search'/>
               <p className={style.searchIcon}><FaSistrix/></p>
               
            </div>

            <div className={style.userWrap}>
               <p><FaCommentAlt/></p>
               <p><FaHeadSideCoughSlash/></p>
               <p><FaUserCircle/></p>
               <p>Ibrahim Sikder</p>
               <p><FaEllipsisV/></p>
            </div>
          </div>
     </div>
      <div className={style.sideBarWrap}>
      <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={style.rightSideBar}>
      <div>
                    <div className={styles.profileTop}>
                         <div>
                         <span className='text-[#808FA4]'>Dashboard / Transactions </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Transactions </h2>
                              <div className={styles.transaction}>
                                  
                                   <button >Ledger Report</button>
                                   <span className={styles.paymentPage}>Pages</span>
                                   <FaAngleLeft/>
                                   <span>1</span>
                                   <span>2</span>
                                   <span>3</span>
                                   <FaAngleRight/>
                                   <FaCalendarAlt/>
                              </div>
                         </div>
                         </div>
                        <div className={styles.flightHistory}>
                        <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Source</th> 
                              <th>Payment Type </th> 
                              <th>Ticket <br /> Booking <br /> Invoice Number </th> 
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
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
     );
};

export default transactions;