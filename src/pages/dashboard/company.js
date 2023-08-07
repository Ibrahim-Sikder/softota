import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import Link from 'next/link';
import styling from '../../../components/UserDashBoard/UserDashBoard.module.css';
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const company = () => {
     return (
          <div>
   
      <div className={styling.sideBarWrap}>
      <div className={styling.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={styling.rightSideBar}>
        <RightSideTopBar/>

               <div>
                    <div className={styles.profileTop}>
                        
                        <div className={styles.flightHistory}>
                        <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Company Name </th> 
                              <th>Client Name  </th> 
                              <th>Phone </th> 
                              <th>Email </th> 
                              <th>Member Since </th> 
                              <th>Status  </th>
                              <th>Address  </th>
                              <th>Details</th>
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td >Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td >View </td> 
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

export default company;