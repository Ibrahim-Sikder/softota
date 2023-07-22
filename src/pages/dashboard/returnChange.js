import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const returnChange = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Void/Return/Change </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Void/Return/Change </h2>
                              <div className={styles.passenger}>
                                  
                                   <button >Add New Quick Passenger</button>
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