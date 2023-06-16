import React from 'react'
import style from './Login.module.css'
import Image from 'next/image';
import login from '../../public/login.png';
import google from '../../public/google.png';
import facebook from '../../public/facebook.png';
import { IconName } from "react-icons/fa";

const Login = () => {
  return (
    <div className='py-24'>
      <div className='flex items-center justify-center'>
          <div>
          <Image
          src={login}
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
                    <label>Email Address</label> <br/>
                    <input placeholder='Email' className={style.loginInput}/>
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

export default Login
