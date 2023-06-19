import React from 'react'
import AdminLeftSide from '../../../components/DashBoard/AdminLeftSide'
import AdminRightSide from '../../../components/DashBoard/AdminRightSide'

const index = () => {
     return (
          <section className='w-[1440px] mx-auto'>
            <div className='grid grid-cols-12'>
                <div>
                    <AdminLeftSide></AdminLeftSide>
                </div>
                <div className='col-span-9'>
                   <AdminRightSide></AdminRightSide>
                </div>
            </div>
          </section>
        )
}

export default index
