import Image from 'next/image'
import React, { useContext } from 'react'
import agent from '../../public/agent.png';
import facebook from '../../public/facebook.png';
import style from './LoginAgent.module.css'
import { AuthContext } from '@/pages/context/AuthContext/AuthProvider';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
const LoginAgent = () => {
     const router = useRouter()
     const {signInWithGoogle, logIn} = useContext(AuthContext)
     const handleLogin = event => {
          event.preventDefault()
          const email = event.target.email.value;
          const password = event.target.password.value;
          const number = event.target.number.value;
          


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
          <div className={style.loginAgentWrap}>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center'>
                <div>
                <Image
                src={agent}
                alt="Picture of the author"
                width={500}
                height={500}
              />
                </div>
                <div>
                    <form onSubmit={handleLogin}>     
                          <div className='mb-5'>
                          <label className={style.loginLabel}>Email Address</label> <br/>
                          <input name='email' type='email' placeholder='Email' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label className={style.loginLabel}>Password</label> <br/>
                          <input name='password' type='password' placeholder='Password' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label className={style.loginLabel}>Agent Number</label> <br/>
                          <input name='number' type='number' placeholder='Agent Number' className={style.loginInput}/>
                          </div>
                          <div className='mb-5 ml-16 sm:ml-0 mt-10'>
                               <button className={style.loginBtn} type='submit'>Login</button>
                          </div>
                          <div className='flex items-center'>
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
                          
                         <button type='submit' onClick={handleGoogleSignIn}>
                         {/* <Image
                               src={google}
                               alt="Picture of the author"
                               width={40}
                               height={20}
                               
                          />  */}
                         </button>
                          </div>
                          <div className={style.circle}>
                              <button onClick={handleGithubSignIn} type='submit'>
                              <Image
                               src={facebook}
                               alt="Picture of the author"
                               width={40}
                               height={20}
           
                          />  
                              </button>  
                          </div> 
                          </div>
                     </form> 
                </div>
            </div>
          </div>
        )
}

export default LoginAgent
