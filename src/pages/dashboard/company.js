import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const company = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Company </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Company</h2>
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
                              <td className='btn bg-[#04A444] text-[#fff]'>Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#FA5653] text-[#fff]'>Deactive </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#FA5653] text-[#fff]'>Deactive </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#FA5653] text-[#fff]'>Deactive </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                               <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>Active </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              </tr>
                              <tr>
                              <td>Ghuronti.com</td>
                              <td >Kaji Ehsan</td> 
                              <td>+88-01885-071-488</td>
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td className='btn bg-[#FA5653] text-[#fff]'>Deactive </td> 
                              <td>Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan, Dhaka 1000</td> 
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

export default company;