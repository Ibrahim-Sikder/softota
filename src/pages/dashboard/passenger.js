import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const passenger = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Quick Pick Passenger </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Quick Pick Passenger  </h2>
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
                              <th >Title</th> 
                              <th>First Name </th> 
                              <th>Last Name </th> 
                              <th>Travel Type  </th> 
                              <th>Mobile Number </th> 
                              <th>Email </th>
                              <th>Date Of Birth  </th> 
                              <th>Passport Number  </th> 
                              <th>Passport Expiry Date </th>
                              <th>Details</th>
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              
                              </tr>
                              <tr>
                              <td>MR</td>
                              <td >MD OSMAN</td> 
                              <td>GONI</td> 
                              <td>Adult</td>
                              <td> 01931666222 </td> 
                              <td>ghuronti@gmail.com</td> 
                              <td>01 Jan 2010 </td> 
                              <td>EH0549485</td> 
                              <td>01 Feb 2026</td> 
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

export default passenger;