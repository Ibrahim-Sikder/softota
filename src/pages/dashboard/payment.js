import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix,FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const payment = () => {
     return (
          <div>
      <div className={style.sideBarWrap}>
      <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={style.rightSideBar}>
      <div>
                    <div className={styles.profileTop}>
                    <RightSideTopBar/>
                        
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