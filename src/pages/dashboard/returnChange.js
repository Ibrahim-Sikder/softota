import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const returnChange = () => {
     return (
          <div>
     <div>
          
     </div>
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
                              <th >PNR</th> 
                              <th>Booked </th> 
                              <th>Created <br /> At </th> 
                              <th>Request <br /> Code  </th> 
                              <th>Booking <br /> Code </th> 
                              <th>Request <br /> Type  </th>
                              <th>Status   </th>
                              <th colSpan={2}>Details</th>
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
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
                              </tr>
                              <tr>
                              <td>WBZCTH</td>
                              <td >Global04 </td> 
                              <td>04 Mar 2023</td> 
                              <td>CHANGE-6403091864602</td>
                              <td> GTRN164091864602 </td> 
                              <td>Change </td> 
                              <td >Completed </td>
                              <td className='cursor-pointer'>View </td> 
                              <td className='cursor-pointer'>Call </td> 
                             
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

export default returnChange;