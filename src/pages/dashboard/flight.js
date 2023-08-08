import Image from 'next/image';
import React from 'react';
import { FaSistrix, FaAngleLeft, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import logo from '../../../public/logo.png'
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import styling from './profile.module.css'
import Link from 'next/link';
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';

const flight = () => {
     return (
          <div>
    
      <div className={style.sideBarWrap}>
      <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={style.rightSideBar}>
      <RightSideTopBar/>

      <div>
           <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
               <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Booking <br /> By  </th> 
                              <th>Booked <br /> Date </th> 
                              <th>Issue <br /> Date </th> 
                              <th>Fly <br /> Date  </th> 
                              <th>Time <br /> Limit  </th> 
                              <th>Rout  </th>
                              <th>Airlines </th> 
                              <th>Booking <br /> Code </th> 
                              <th>PNR </th> 
                              <th>Payment <br /> Status</th> 
                              <th>Booking <br /> Status  </th> 
                              <th>Cards <br /> Pay </th> 
                              <th>Client <br /> Pays</th>
                              <th>Agent <br /> Pay  </th> 
                              <th>AIT </th> 
                              <th colSpan={2}>Detail</th> 
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar  2023 16:08</td> 
                              <td>Not Issued Yet </td> 
                              <td>05 Apr 2023 11:00</td>
                              <td> 30 Mar 2023 12:05</td> 
                              <td>DAC-MAA-DAC</td> 
                              <td>BS</td> 
                              <td>GTRN16797234601596</td> 
                              <td>056XNH</td> 
                              <td>Unpaid </td>
                              <td>Cancel </td> 
                              <td>No</td> 
                              <td>-57590</td>
                              <td>-5143</td> 
                              <td>156</td> 
                              <td className='btn bg-[#26ADE2] text-white'>View</td>         
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

export default flight;