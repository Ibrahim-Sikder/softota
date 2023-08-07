import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styling from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
import Link from 'next/link';
import RightSideTopBar from '../../../components/UserDashBoard/RightSideTopBar';
const banklist = () => {
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
                              <th >Name of Bank</th> 
                              <th>Branch Name </th> 
                              <th>Account Name </th> 
                              <th>Routing Number  </th> 
                              <th>Account Number </th> 
                              <th>Payment Change </th>
                              <th>Company Details  </th>
                              </tr>

                         </thead> 
                         <tbody>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>

                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
                              <td className='btn bg-[#04A444] text-[#fff]'>View </td> 
                              <td className='btn bg-[#26ADE2] text-[#fff]'>Call </td>
                              </tr>
                              <tr>
                              <td>City Bank LTD</td>
                              <td >Gulshan Avenue</td> 
                              <td>1262751784001</td> 
                              <td>225261732</td>
                              <td> Global Explore Pvt. Limited </td> 
                              <td>Inter city charge applicable for Cash deposit% on Total amount</td>
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

export default banklist;