import Image from 'next/image'
import React from 'react';
import style from './SignUpAgent.module.css'
import login from '../../public/agent.png';
import google from '../../public/google.png';
import facebook from '../../public/facebook.png';

const SignUpAgent = () => {
     return (
          <div className='py-24'>
            <div className='flex justify-between w-[1200px] mx-auto'>
                <div>
                <Image
                src={login}
                alt="Picture of the author"
                width={500}
                height={500}
                />
                </div>
                <div>
                    <form>
                    <div className='mb-5'>
                          <label>User Name</label> <br/>
                          <input placeholder='User Name' className={style.loginInput}/>
                          </div>     
                          <div className='mb-5'>
                          <label>Email Address</label> <br/>
                          <input placeholder='Email' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Password</label> <br/>
                          <input placeholder='Password' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Mobile Number</label> <br/>
                          <input placeholder='Number' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Agent Number </label> <br/>
                          <input placeholder='Agent Number' className={style.loginInput}/>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <button className={style.loginBtn} type='submit'>Sign Up as Agent</button>
                          </div>

                     </form> 
                </div>
            </div>
          </div>
        )
}

export default SignUpAgent
