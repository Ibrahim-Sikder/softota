import Image from 'next/image'
import React from 'react'
import AdminLeftSide from '../../../components/DashBoard/AdminLeftSide'
// import style from '../../../components/DashBoard/DashBoard.module.css';
import style from './delete.module.css';
import deleteAccount from '../../../public/deleteAccount.png' 

const index = () => {
     return (
          <section>
            <div className='grid grid-cols-12'>
                <div>
                    <AdminLeftSide></AdminLeftSide>
                </div>
                <div className='col-span-9'>
                    <div className={style.delete}>
                    <Image
                    src={deleteAccount}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    />
                    <div>
                         <p className={style.deleteText}>
                         You can delete your Ghuronti Account at any time. If you change your mind, you might not be able to recover it.
                         </p>
                         <button className={style.deleteBtn}>Delete Account </button>
                    </div>
                    </div>
                </div>
            </div>
          </section>
        )
}

export default index
