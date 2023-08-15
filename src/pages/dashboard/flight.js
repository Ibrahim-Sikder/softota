import Image from 'next/image';
import React from 'react';
import { FaSistrix, FaAngleLeft, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import logo from '../../../public/logo.png'
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import styling from './profile.module.css'
import Link from 'next/link';
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
import dynamic from "next/dynamic";
const flight = () => {
     return (
          <div>
    
      <div className={style.sideBarWrap}>
      <div className={style.leftSideBar}>
          <UserDashBoardLeft/>
      </div>
      <div className={style.flightRightSide}>

      <RightSideTopBar/>
      <div className={style.moveText}>
              <marquee
                onmouseout="this.start()"
                onmouseover="this.stop();" behavior="scroll" direction="left"> <h2 className="text-xl font-bold">Ghuronti is your best partner for your journey ! </h2></marquee>
            </div>

      <div className='mt-5'>
           <div className={styling.profileTop}>
              <div className={styling.flightHistory}>
               <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Booking  By  </th> 
                              <th>Booked  Date </th> 
                              <th>Issue  Date </th> 
                              <th>Fly  Date  </th> 
                              <th>Time  Limit  </th> 
                              <th>Rout  </th>
                              <th>Airlines </th> 
                              <th>Booking  Code </th> 
                              <th>PNR </th> 
                              <th>Payment  Status</th> 
                              <th>Booking  Status  </th> 
                              <th>Cards  Pay </th> 
                              <th>Client Pays</th>
                              <th>Agent  Pay  </th> 
                              <th>AIT </th> 
                              <th>Detail</th> 
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


export default dynamic(() => Promise.resolve(flight), { ssr: false });