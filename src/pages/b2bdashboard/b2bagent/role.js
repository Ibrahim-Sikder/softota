import React from "react";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import styles from "../manage/manage.module.css";
import style from '../b2bagent/agent.module.css'
import TextField from '@mui/material/TextField';

const Role = () => {
    const users = [
        {
            id: '01',
            name: "Rakib",
            role: 'admin',
            email: 'admin@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'active'
            
        },
        {
            id: '02',
            name: "Hanif",
            role: 'manager',
            email: 'manager@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'inactive'
            
        },
        {
            id: '03',
            name: "Karim",
            role: 'Team Leader',
            email: 'karim@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'active'
            
        },
        {
            id: '04',
            name: "Habib",
            role: 'admin',
            email: 'habib@gmail.com',
            username: 'admin',
            mobile: '0182577775',
            status: 'inactive'
            
        },

    ]
  return (
    <B2BdashboardLayout>
      <div className="w-full h-[50px] bg-[#19ABE3] text-white flex items-center justify-center ">
        <h2 className="text-center text-2xl font-bold">Make Role </h2>
      </div>
      <div className="flex items-center justify-between w-full px-5">
        <div>
            <label> Search </label> <br />
            <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
        <div>
        <div className="flex items-center justify-center w-full">
        <button className='flex items-center justify-center font-bold  mb-5 mt-10 w-32 rounded text-white h-10 bg-[#4AB449]' onClick={() => window.my_modal_3.showModal()}>
         + Add role
        </button>
        </div>
        </div>
      </div>

       {/* show modal */}
       <div className={styles.modal}>
          <dialog id="my_modal_3" className="">
            <h3 className="text-center font-bold text-2xl">Create Role </h3>
            <form method="dialog" className="modal-box">
              <button className='w-10 h-10 rounded bg-[#19ABE3] text-white'>✕</button>
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Role Name </label>
                    <input
                      name="code"
                      placeholder="Role Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Status</label>
                    <select className={styles.inputField}>
                      <option selected value="Select Status">
                       Select Status
                      </option>
                      <option value="Manager">Active</option>
                      <option value="Team Lead">Inactive</option>
                    </select>
                  </div>

                </div>

                <div className='flex items-center justify-center'>
                  <button className='w-56 h-10 text-center border text-white bg-[#19ABE3] rounded-full' type="submit">
                    Create Role
                  </button>
                </div>
              </form>
            </form>
          </dialog>
        </div>




      <table className="table  lg:table-auto columns-xl break-after-column mt-8 mb-24 ">
        <thead className={styles.tableWrap}>
          <tr className={style.alluserList}>
            <th>SL No </th>
            <th> Name </th>
            <th>Role</th>
            <th>Created By  </th>
            <th>Status </th>
            <th colSpan={3}>Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=><tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>Super Admin </td>
                <td>
                  <span className="bg-[#4AB449] text-white font-xs text-xs p-2 rounded">
                    {user.status}
                  </span>
                </td>
                <td>
                  <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                    View
                  </span>
                </td>
                <td>
                  <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                    Edit
                  </span>
                </td>
                <td>
                  <span className="bg-red-600 text-white font-xs text-xs p-2 rounded">
                    Delete
                  </span>
                </td>
              </tr>)
          }
          
        </tbody>
      </table>
    </B2BdashboardLayout>
  );
};

export default Role;