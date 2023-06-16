import Image from 'next/image'
import React from 'react'
import agent from '../../public/agent.png';
import google from '../../public/google.png';
import facebook from '../../public/facebook.png';
import style from './LoginAgent.module.css'
const LoginAgent = () => {
     return (
          <div className='py-24'>
            <div className='flex justify-between w-[1300px] mx-auto'>
                <div>
                <Image
                src={agent}
                alt="Picture of the author"
                width={600}
                height={700}
              />
                </div>
                <div>
                    <form>     
                          <div className='mb-5'>
                          <label>Email Address</label> <br/>
                          <input placeholder='Email' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Password</label> <br/>
                          <input placeholder='Password' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Agent Number</label> <br/>
                          <input placeholder='Agent Number' className={style.loginInput}/>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <button className={style.loginBtn} type='submit'>Login</button>
                          </div>
                          <div className='flex items-center justify-center'>
                               <p className={style.devided}></p>
                               <span className='mx-5'>or</span>
                               <p className={style.devided}></p>
                          </div>
                          <div className='mb-5 ml-16 mt-5'>
                               <button className={style.loginBtn2} type='submit'>Login as Agent</button>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <button className={style.loginBtn3} type='submit'>Create your account </button>
                          </div>
                          <div className='flex justify-between mt-32 w-32 mx-auto'>
                          <div className={style.circle}>
                          <Image
                               src={google}
                               alt="Picture of the author"
                               width={40}
                               height={20}
                               
                          /> 
                          </div>
                          <div className={style.circle}>
                          <Image
                               src={facebook}
                               alt="Picture of the author"
                               width={40}
                               height={20}
           
                          />    
                          </div> 
                          </div>
                     </form> 
                </div>
            </div>
          </div>
        )
}

export default LoginAgent
