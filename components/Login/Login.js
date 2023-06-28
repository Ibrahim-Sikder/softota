import React, { useContext } from 'react'
import style from './Login.module.css'
import Image from 'next/image';
import login from '../../public/login.png';
import google from '../../public/google.png';
import facebook from '../../public/facebook.png';
import Link from 'next/link';
import { signIn } from "next-auth/react"

import { useRouter } from 'next/router';
import { AuthContext } from '@/pages/context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
     const router = useRouter()
     const {signInWithGoogle, logIn} = useContext(AuthContext)
     const handleLogin = event => {
          event.preventDefault()
          const email = event.target.email.value;
          const password = event.target.password.value;
          console.log(email,password)


          logIn(email, password)
          .then( result => {
              const user = result.user;
              console.log(user)
              toast.success('User Login Successfully')
               router.push('/')
          })
          .catch( err => {
              console.error( err )
          })
      }
   

     const handleGoogleSignIn = () => {
          signInWithGoogle()
              .then(result => {
                  console.log(result.user)
              })
              .catch(err => {
                  console.log(err);
              })
      }

     // async function handleGoogleSignIn(){
     //      signIn('google',{callbackUrl:"http://localhost:3000"})
     // }
     async function handleGithubSignIn(){
          signIn('github',{callbackUrl:"http://localhost:3000"})
     }

  return (
    <div className={style.loginWrap}>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
          <div>
          <Image
          src={login}
          alt="Picture of the author"
          width={600}
          height={700}
        />
          </div>
          <div>
              <form onSubmit={handleLogin}>     
                    <div className='mb-5'>
                    <label>Email Address</label> <br/>
                    <input name='email' type='email' placeholder='Email' className={style.loginInput}/>
                    </div>
                    <div className='mb-5'>
                    <label>Password</label> <br/>
                    <input name='password' type='password' placeholder='password' className={style.loginInput}/>
                    </div>
                    <div className='mb-5 ml-16 mt-10'>
                         <button className={style.loginBtn} type='submit'>Login</button>
                    </div>
                    <div className='flex items-center '>
                         <p className={style.devided}></p>
                         <span className='mx-5'>or</span>
                         <p className={style.devided}></p>
                    </div>
                    <div className='mb-5 ml-16 mt-5'>
                         <Link href='/loginAgent'>
                         <button className={style.loginBtn2} type='submit'>Login as Agent</button>
                         </Link>
                    </div>
                    <div className='mb-5 ml-16 mt-10'>
                        
                         <Link href='/signup'>
                               <button className={style.loginBtn3} type='submit'>Create your account </button>
                               </Link>
                    </div>
                    <div className={style.loginWithProvider}>
                    <div className='flex justify-between mt-32 w-32 mx-auto'>
                    <div className={style.circle}>
                    <button type='button' onClick={handleGoogleSignIn}>
                    <Image
                         src={google}
                         alt="Picture of the author"
                         width={40}
                         height={20}
                         
                    /> 
                    </button>
                    </div>
                    <div className={style.circle}>
                    <button type='button' onClick={handleGithubSignIn}>
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

export default Login
