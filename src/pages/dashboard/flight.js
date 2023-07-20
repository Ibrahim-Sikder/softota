import Image from 'next/image';
import React from 'react';
import { FaSistrix, FaAngleLeft, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import logo from '../../../public/logo.png'
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import styles from './profile.module.css'
const flight = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Profile </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Flight History</h2>
                              <div className={styles.pages}>
                                   <button>Primary Action</button>
                                   <span >Pages</span>
                                   <FaAngleLeft/>
                                   <span>1</span>
                                   <span>2</span>
                                   <span>3</span>
                              </div>
                         </div>
                         </div>
                        <div className={styles.flightHistory}>
                        <div className="overflow-x-auto ">
                         <table className="table  lg:table-auto columns-xl break-after-column">
                         <thead className={style.tableWrap}>
                              <tr>
                              <th >Booking By  </th> 
                              <th>Booked Date </th> 
                              <th>Issue Date </th> 
                              <th>Fly Date  </th> 
                              <th>Time Limit  </th> 
                              <th>Rout  </th>
                              <th>Airlines </th> 
                              <th>Booking Code </th> 
                              <th>PNR </th> 
                              <th>Payment Status</th> 
                              <th>Booking Status  </th> 
                              <th>Cards Pay </th> 
                              <th>Client Pays</th>
                              <th>Agent Pay  </th> 
                              <th>AIT </th> 
                              <th>Detail</th> 
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
                              </tr>
                              <tr>
                              <td>Global04</td>
                              <td >29 Mar 2023 16:08</td> 
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
                              <td className='btn btn-secondary'>View</td> 
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