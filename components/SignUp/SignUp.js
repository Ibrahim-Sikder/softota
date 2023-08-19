'use client'

import Image from 'next/image'
import React, {  useState } from 'react'
import style from './SignUp.module.css';
import login from '../../public/login.png';
import facebook from '../../public/facebook.png';
import google from '../../public/google.png';
import Link from 'next/link';
import { FaEyeSlash, FaEye  } from "react-icons/fa";
const SignUp = () => {
     const [showPassword, setShowPassword] = useState(false);
     const handleClickShowPassword = () => setShowPassword((show) => !show);
     const handleMouseDownPassword = () => {
     };



     return (
          <div className={style.SignupWrap}>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center'>
                <div>
                <Image
                src={login}
                alt="Picture of the author"
                width={600}
                height={700}
              />
                </div>
                <div className='mt-10'>
                    <form >
                    <div className='mb-5'>
                          <label className={style.inputLabel}>User Name</label> <br/>
                          <input onChange={(event)=>setName(event.target.value)} name='fname' type='text'  placeholder='User Name' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label className={style.inputLabel}>Email Address</label> <br/>
                          <input onChange={(event)=>setEmail(event.target.value)} type='email' name='email' placeholder='Email' className={style.loginInput}/>
                          </div>
                          <div className='mb-5 relative'>
                          <label className={style.inputLabel}>Password</label> <br/>
                          <input onChange={(event)=>setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' className={style.loginInput}/>
                          <span  
                         onClick={handleClickShowPassword}
                         onMouseDown={handleMouseDownPassword} 
                         className={style.ShowIcon}>
                         {showPassword ? <FaEyeSlash/> :  <FaEye/>}
                         </span>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <button className={style.loginBtn} type='submit' >Sign Up</button>
                          </div>
                          <div className='flex items-center '>
                               <p className={style.devided}></p>
                               <span className='mx-5'>or</span>
                               <p className={style.devided}></p>
                          </div>
                          <div className='mb-5 ml-16 sm:ml-8 mt-5'>
                               <Link href='/signupAgent'>
                               <button className={style.loginBtn2} type='submit'>Sign Up as Agent</button>
                               </Link>
                          </div>
                          <div className='mb-5 ml-16 sm:ml-8 mt-10'>
                               <Link href='/signup'>
                               <button className={style.loginBtn3} type='submit'>Create your account </button>
                               </Link>
                          </div>
                          <div className={style.loginWithProvider}>
                          <div className={style.providerLoginWrap}>
                          <div className={style.circle}>
                          
                          <button type='button' >
                          <Image
                               src={google}
                               alt="Picture of the author"
                               width={40}
                               height={20}
                               
                          /> 
                          </button>
                          </div>
                          <div className={style.circle}>
                          <button type='button'>
                          <Image
                               src={facebook}
                               alt="Picture of the author"
                               width={40}
                               height={20}
           
                          />  
                          </button>  
                          </div>
                         
                          </div>
                          </div>
                     </form> 
                </div>
            </div>
          </div>
        )
}

export default SignUp
