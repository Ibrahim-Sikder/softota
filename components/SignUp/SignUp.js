import Image from 'next/image'
import React, { useState } from 'react'
import style from './SignUp.module.css';
import login from '../../public/login.png';
import google from '../../public/google.png';
import facebook from '../../public/facebook.png';
import Link from 'next/link';

const SignUp = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)

  const handleSubmit = async (event)=>{
    setLoading(true)
    event.preventDefault();
    const post = {name, email,password}

    try{
       fetch('/api/blog',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res=>res.json())
      .then(data=>{
          setTitle(data)
          alert('Data inserterd succssfully!!')
     })
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }

  }
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
                    <form onSubmit={handleSubmit}>
                    <div className='mb-5'>
                          <label>User Name</label> <br/>
                          <input type='text' onChange={(event)=>setName(event.target.value)} placeholder='User Name' className={style.loginInput}/>
                          </div>     
                          <div className='mb-5'>
                          <label>Email Address</label> <br/>
                          <input type='email' name='email' onChange={(event)=>setEmail(event.target.value)} placeholder='Email' className={style.loginInput}/>
                          </div>
                          <div className='mb-5'>
                          <label>Password</label> <br/>
                          <input type='password' name='password' onChange={(event)=>setPassword(event.target.value)} placeholder='Password' className={style.loginInput}/>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <button className={style.loginBtn} type='submit'>Sign Up</button>
                          </div>
                          <div className='flex items-center justify-center'>
                               <p className={style.devided}></p>
                               <span className='mx-5'>or</span>
                               <p className={style.devided}></p>
                          </div>
                          <div className='mb-5 ml-16 mt-5'>
                               <Link href='/signupAgent'>
                               <button className={style.loginBtn2} type='submit'>Sign Up as Agent</button>
                               </Link>
                          </div>
                          <div className='mb-5 ml-16 mt-10'>
                               <Link href='/signup'>
                               <button className={style.loginBtn3} type='submit'>Create your account </button>
                               </Link>
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

export default SignUp
