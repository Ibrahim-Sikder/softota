import React from 'react'
import AdminLeftSide from '../../../components/DashBoard/AdminLeftSide'
import Image from 'next/image'
import style from './Pass.module.css'
import password from '../../../public/password.png';
import start from '../../../public/start.png';
import eye from '../../../public/eye.png'
const index = () => {
     return (
          <section className={style.passWordWrap}>
            <div className='grid grid-cols-12'>
                <div>
                    <AdminLeftSide></AdminLeftSide>
                </div>
                <div className='col-span-9'>
                    <div className={style.passwordImg}>
                    <Image
                    src={password}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    />
                    <div className={style.passwordWrapa}>
                         <form>
                              <div className='relative mb-5'>
                              <div >
                              <div className='flex ml-[52px]'>
                              <label>Old Password </label> 
                              <span>
                              <Image
                              src={start}
                              alt="Picture of the author"
                              width={5}
                              height={20}
                              />
                              </span>
                                   </div>
                               
                              <input className={style.passwordInput} placeholder='Old Password'/>
                              </div>
                              <Image
                              className='absolute right-[85px] top-[45px]'
                              src={eye}
                              alt="Picture of the author"
                              width={20}
                              height={20}
                              />
                              </div>
                              <div className='relative mb-5'>
                              <div >
                              <div className='flex ml-[52px]'>
                              <label>New Password </label> 
                              <span>
                              <Image
                              src={start}
                              alt="Picture of the author"
                              width={5}
                              height={20}
                              />
                              </span>
                                   </div>
                               
                              <input className={style.passwordInput} placeholder='New Password'/>
                              </div>
                              <Image
                              className='absolute right-[85px] top-[45px]'
                              src={eye}
                              alt="Picture of the author"
                              width={20}
                              height={20}
                              />
                              </div>
                              <div className='relative mb-5'>
                              <div >
                              <div className='flex ml-[52px]'>
                              <label>Re-New Password </label> 
                              <span>
                              <Image
                              src={start}
                              alt="Picture of the author"
                              width={5}
                              height={20}
                              />
                              </span>
                                   </div>
                               
                              <input className={style.passwordInput} placeholder='Re-New Password'/>
                              </div>
                              <Image
                              className='absolute right-[85px] top-[45px]'
                              src={eye}
                              alt="Picture of the author"
                              width={20}
                              height={20}
                              />
                              </div>
                              <div>
                                   <button className={style.updatePassword}>Update Password</button>
                              </div>
                         </form>
                        
                    </div>
                    </div>
                </div>
            </div>
          </section>
        )
}

export default index
