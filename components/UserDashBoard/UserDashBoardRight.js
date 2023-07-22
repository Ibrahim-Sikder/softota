import React from 'react'
import style from './UserDashBoard.module.css'
import {  FaAngleLeft, FaAngleRight, FaCalendarAlt} from 'react-icons/fa';
import styles from '../../src/pages/dashboard/profile.module.css'
const UserDashBoardRight = () => {
  return (
    <div>
        <div className={style.profileTop}>
       <div className={style.hotelHistory}>
          <span className='text-[#808FA4]'>Dashboard / Profile </span>
            <div className='flex justify-between'>
             <h2 className='text-2xl font-bold text-[#04A444]'>Hotel History</h2>
               <div className={styles.pages}>
                <button>Primary Action</button>
                  <span >Pages</span>
                  <FaAngleLeft/>
                  <span>1</span>
                   <span>2</span>
                   <span>3</span>
                   <FaAngleRight/>
                    <FaCalendarAlt/>
            </div>
           </div>
          </div>
                        
      <div className="overflow-x-auto ">
  <table className="table  lg:table-auto columns-xl break-after-column">
    <thead className={style.tableWrap}>
      <tr>
        <th >Agency <br /> Code </th> 
        <th>Booked <br /> By</th> 
        <th>Hotel <br /> Name </th> 
        <th>City </th> 
        <th>Country </th> 
        <th>Voucher <br /> Code </th>
        <th>Total <br /> Price </th> 
        <th>Cancel <br /> Policy</th> 
        <th>Agent <br /> Confirm <br />  Status </th> 
        <th>Check <br /> In </th> 
        <th>Check <br /> Out </th> 
        <th colSpan={2}> Detail </th>
      </tr>

    </thead> 
    <tbody>
     
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
      <tr>
      <td>056XNH</td>
        <td >Globa04</td> 
        <td>Golden Inn Ltd</td> 
        <td>Chittagong</td>
        <td> Bangladesh</td> 
        <td>056XNH</td> 
        <td>57590</td> 
        <td>Yes</td> 
        <td>GT6797234</td> 
        <td>29 Mar 2023 16:08</td>
        <td>29 Mar 2023 16:08</td> 
        <td className='btn bg-[#04A444] text-white'>View</td> 
        <td className='btn bg-[#26ADE2] text-white'>Call</td> 
      </tr>
    </tbody> 
  </table>
      </div>
</div>

    </div>
  )
}

export default UserDashBoardRight
