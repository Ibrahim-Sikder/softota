import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import style from '../../../components/UserDashBoard/UserDashBoard.module.css'
import { FaSistrix, FaCalendarAlt, FaAngleRight, FaCommentAlt,FaHeadSideCoughSlash ,FaUserCircle,FaEllipsisV} from 'react-icons/fa';
import UserDashBoardLeft from '../../../components/UserDashBoard/UserDashBoardLeft';
import styles from './profile.module.css'
import { FaAngleLeft } from "react-icons/fa";
const banklist = () => {
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
                         <span className='text-[#808FA4]'>Dashboard / Bank List </span>
                         <div className='flex justify-between'>
                              <h2 className='text-2xl font-bold '>Bank List </h2>
                              <div className={styles.passenger}>
                                  
                                   <button >Add New Quick Pick Passenger</button>
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