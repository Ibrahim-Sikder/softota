import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const partial = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Partial Payment  </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Partial Payment </h2>
                              <div className={styles.passenger}>
                                  
                                   <button >Payment Online </button>
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
                              <th >Reference </th> 
                              <th>Zone  </th> 
                              <th>Agency </th> 
                              <th>PNR </th> 
                              <th>Company <br /> Code </th> 
                              <th>Fly <br /> Date  </th>
                              <th>Total <br /> Amount  </th> 
                              <th>Total <br /> Paid <br /> Amount  </th> 
                              <th>Due <br /> Amount  </th> 
                              <th>Payment <br /> Due <br /> Date  </th>
                              <th>Status </th>
                              <th>Payment <br /> Status  </th>
                              <th>Expired <br /> At  </th>
                              <th>Agent <br /> Pay  </th>
                              <th>Requested <br /> On </th>
                              <th colSpan={2}>Details  </th>
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
                              </tr>
                              <tr>
                              <td>PARTIAL641961B9444B3</td>
                              <td >Dhaka </td> 
                              <td>GlobalExplorePvt Ltd </td> 
                              <td>BFFNBD</td>
                              <td> STA-102081 </td> 
                              <td>20 Apr 23 11:30</td> 
                              <td>39330</td> 
                              <td>39330</td> 
                              <td>0</td> 
                              <td>2023-03-2915:00</td> 
                              <td>Completed</td> 
                              <td>Paid</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td> 
                              <td>2023-03-2915:00</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              
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

export default partial;