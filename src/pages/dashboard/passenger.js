import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const passenger = () => {
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