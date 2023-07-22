import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix,FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const payment = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Payment </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Payment </h2>
                              <div className={styles.payment}>
                                   <button className={styles.paymentBtn}>Payment manual</button>
                                   <button >Payment online</button>
                                   <span className={styles.paymentPage}>Pages</span>
                                   <FaAngleLeft/>
                                   <span>1</span>
                                   <span>2</span>
                                   <span>3</span>
                                   <FaAngleRight/>
                              </div>
                         </div>
                         </div>
                        <div className={styles.flightHistory}>
                        <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Created At  </th> 
                              <th>Deposit Date </th> 
                              <th>Payment Type </th> 
                              <th>Reference Number  </th> 
                              <th>Top Up Amount  </th> 
                              <th>Deposited To </th>
                              <th>Gateway Name </th> 
                              <th>Payment Status  </th> 
                              <th>Details </th>
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>29 Mar 2023 16:08</td>
                              <td >29 Mar 2023 16:08</td> 
                              <td>Bank </td> 
                              <td>6797234601596 </td>
                              <td> 601596 </td> 
                              <td>City Bank Limited</td> 
                              <td>Nagad</td> 
                              <td>Approved</td> 
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

export default payment;