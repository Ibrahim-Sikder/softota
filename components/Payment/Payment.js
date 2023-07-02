import React, { useState } from 'react'
import style from './Payment.module.css'
import Image from 'next/image';
import payment from '../../public/payment.png';
import payment2 from '../../public/payment2.png';
import payment3 from '../../public/payment3.png'
import payment4 from '../../public/payment4.png'
import payment5 from '../../public/payment5.png';
import term from '../../public/term.png'
const Payment = () => {
     const [fname, setFname] = useState('')
     const [lname, setLname] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [number, setNumber] = useState('')
     const [gender, setGender] = useState('')
     const [date, setDate] = useState('')
     const [nationality, setNationality] = useState('')
     const [bkash, setBkash] = useState('')
     const [title, setTitle] = useState('')
     const [loading, setLoading] = useState(false)

     const handleSubmit = (event)=>{
          event.preventDefault()
          const fname = event.target.fname.value;
          const lname = event.target.lname.value;
          const number = event.target.number.value;
          const nationality = event.target.nationality.value;
          const gender = event.target.gender.value;
          const date = event.target.date.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          const bkash = event.target.bkash.value;
          const payment  = {fname, lname, number, nationality, gender, date, email, password, bkash}
          console.log(payment)

          
          try{
               fetch('/api/payment',{
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payment)
              })
              .then(res=>res.json())
              .then(data=>setTitle(data))
            }
            catch(err){
              console.log(err)
            }
            finally{
              setLoading(false)
            }
          
     }
  return (
    <div className={style.paymentWrap}>
      <div className={style.payment}>
          <h2 >Personal Information </h2>
          <form onSubmit={handleSubmit}>
               <div className={style.singlePayment}>
                    <div>
                    <label>First Name </label> <br/>
                    <input onChange={(event)=>setFname(event.target.value)} type='text' className={style.paymentBtn} name='fname' placeholder='First Name '/>
                    </div>
                    <div>
                    <label>Last Name </label> <br/>
                    <input onChange={(event)=>setLname(event.target.value)} type='text' className={style.paymentBtn} name='lname' placeholder='Last Name '/>
                    </div>
               </div>
               <div className={style.singlePayment}>
                    <div>
                    <label>Email </label> <br/>
                    <input onChange={(event)=>setEmail(event.target.value)} type='email' className={style.paymentBtn} name='email' placeholder='Email '/>
                    </div>
                    <div>
                    <label>Password </label> <br/>
                    <input onChange={(event)=>setPassword(event.target.value)} type='password' className={style.paymentBtn} name='password' placeholder='Password '/>
                    </div>
               </div> 
               <div className={style.singlePayment}>
                    <div>
                    <label>Mobile Number </label> <br/>
                    <input onChange={(event)=>setNumber(event.target.value)} type='number' className={style.paymentBtn} name='number' placeholder='Mobile Number'/>
                    </div>
                    <div>
                    <label>Gender</label> <br/>
                    <input onChange={(event)=>setGender(event.target.value)} type='text' className={style.paymentBtn} name='gender' placeholder='Gender'/>
                    </div>
               </div> 
               <div className={style.singlePayment}>
                    <div>
                    <label>Date of Birth </label> <br/>
                    <input onChange={(event)=>setDate(event.target.value)} type='date' className={style.paymentBtn} name='date' placeholder='Date of Birth'/>
                    </div>
                    <div>
                    <label>Nationality </label> <br/>
                    <input onChange={(event)=>setNationality(event.target.value)} type='text' className={style.paymentBtn} name='nationality' placeholder='Nationality '/>
                    </div>
               </div>
               <div className={style.payments}>
               <div>
                    <h3 className='w-full mx-auto pl-12 mb-5'>Select your Payment mathod</h3>
                    <div className='flex items-center justify-center flex-wrap'>
                         <div className={style.method}>
                         <Image
                              src={payment}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                          />
                         </div>
                         <div className={style.method}>
                         <Image
                              src={payment2}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                          />
                         </div>
                         <div className={style.method}>
                         <Image
                              src={payment3}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                          />
                         </div>
                         <div className={style.method}>
                         <Image
                              src={payment4}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                          />
                         </div>
                         <div className={style.method}>
                         <Image
                              src={payment5}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                          />
                         </div>
                    </div>
               </div>
               <div className='mb-5'>
                    <lable>Bkash</lable> <br/>
                    <input onChange={(event)=>setBkash(event.target.value)} type='number' className={style.bkash} placeholder='Enter Your Number' name='bkash'/>
               </div>
               <div className={style.bkashText}>
               <h4>Tatal amount = BDT 23,650</h4>
               <span className='text-[#6EC36D]'>(Price includes VAT & Tax)</span>
               </div>
               <div className='flex mb-5  items-center justify-center mt-5'>
               <Image
                  src={term}
                   alt="Picture of the author"
                   width={20}
                   height={10}
                    />
                    <p> I have read and accept the <span className='text-[#6EC36D]'>Terms and Conditions.</span></p>
               </div>
               <button type='submit' className={style.termBtn}>Send your payment</button>
          </div>


          </form>
      </div>
    </div>
  )
}

export default Payment
