import React, { useState } from 'react'
import style from './Payment.module.css'
import Image from 'next/image';
import payment from '../../public/payment.png';
import payment2 from '../../public/payment2.png';
import payment3 from '../../public/payment3.png'
import payment4 from '../../public/payment4.png'
import payment5 from '../../public/payment5.png';
import term from '../../public/term.png'
import { FaEyeSlash,FaEye,FaStar } from "react-icons/fa";
const Payment = () => {
     const [showPassword, setShowPassword] = useState(false);
     const handleClickShowPassword = () => setShowPassword((show) => !show);
     const handleMouseDownPassword = () => {
     };
     const [fname, setFname] = useState('')
     const [lname, setLname] = useState('')
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [number, setNumber] = useState('')
     const [price, setPrice] = useState('')
     const [address, setAddress] = useState('')
     const [currency, setCurrency] = useState('')
     const [postcode, setPostcode] = useState('')
     const [title, setTitle] = useState('')
     const [loading, setLoading] = useState(false)

     const handleSubmit = (event)=>{
          event.preventDefault()
          const fname = event.target.fname.value;
          const lname = event.target.lname.value;
          const number = event.target.number.value;
          const currency = event.target.currency.value;
          const price = event.target.price.value;
          const address = event.target.address.value;
          const email = event.target.email.value;
          const password = event.target.password.value;
          const postcode = event.target.postcode.value;
          const payment  = {fname, lname, number, currency, price, address, email, password, postcode}
          console.log(payment)
          // event.productId = id;

          
          try{
               fetch('http://localhost:5000/payment',{
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payment)
              })
              .then(res=>res.json())
               .then(data=>{
                    console.log(data)
                    window.location.replace(data.url)
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
    <div className={style.paymentWrap}>
      <div className={style.payment}>
          <h2 >Personal Information </h2>
          <form onSubmit={handleSubmit}>
               <div className={style.singlePayment}>
                    <div className='relative'>
                    <label className={style.inputLabel}>First Name </label> <br/>
                    <span className={style.star}><FaStar/></span>
                    <input onChange={(event)=>setFname(event.target.value)} type='text' className={style.paymentBtn} name='fname' placeholder='First Name '/>
                    
                    </div>
                    <div className='relative'>
                    <label className={style.inputLabel}>Last Name </label> <br/>
                    <span className={style.star}><FaStar/></span>
                    <input onChange={(event)=>setLname(event.target.value)} type='text' className={style.paymentBtn} name='lname' placeholder='Last Name '/>
                    </div>
               </div>
               <div className={style.singlePayment}>
                    <div className='relative'>
                    <label className={style.inputLabel}>Email </label> <br/>
                    <span className={style.star}><FaStar/></span>
                    <input onChange={(event)=>setEmail(event.target.value)} type='email' className={style.paymentBtn} name='email' placeholder='Email '/>
                    </div>
                    <div className='relative'>
                    <label className={style.inputLabel}>Password </label> <br/>
                    <span className={style.star}><FaStar/></span>
                    <input onChange={(event)=>setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} className={style.paymentBtn} name='password' placeholder='Password '/>
                    <span  
                         onClick={handleClickShowPassword}
                         onMouseDown={handleMouseDownPassword} 
                         className={style.ShowIcon}>
                         {showPassword ? <FaEyeSlash/> :  <FaEye/>}
                         </span>
                    </div>
               </div> 
               <div className={style.singlePayment}>
                    <div className='relative'>
                    <label className={style.inputLabel}>Mobile Number </label> <br/>
                    <span className={style.star2}><FaStar/></span>
                    <input onChange={(event)=>setNumber(event.target.value)} type='number' className={style.paymentBtn} name='number' placeholder='Mobile Number'/>
                    </div>
                    <div>
                    <label className={style.inputLabel}>Gender</label> <br/>
                    <input onChange={(event)=>setPrice(event.target.value)} type='text' className={style.paymentBtn} name='price' placeholder='Price'/>
                    </div>
               </div> 
               <div className={style.singlePayment}>
                    <div>
                    <label className={style.inputLabel}>Date of Birth </label> <br/>
                    <input onChange={(event)=>setAddress(event.target.value)} type='date' className={style.paymentBtn} name='date' placeholder='Date of Birth'/>
                    
                    </div>
                  
                    <div>
                    <label className={style.inputLabel}>Nationality </label> <br/>
                    <input onChange={(event)=>setAddress(event.target.value)} type='text' className={style.paymentBtn} name='nationality' placeholder='Nationality'/>
                    
                    </div>
               </div>
               <div className={style.singlePayment}>
                    <div>
                    <label className={style.inputLabel}>Address </label> <br/>
                    <input onChange={(event)=>setPostcode(event.target.value)} type='text' className={style.paymentBtn} name='address' placeholder='Address '/>
                    
                    </div>
               </div>
               <div className={style.payments}>
               <div>
                    <h3 >Select your Payment mathod</h3>
                     <div className='flex items-center justify-center mb-8 flex-wrap'>
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
               <span className={style.priceTax}> (Price includes VAT & Tax)</span>
               </div>
               <div className='flex mb-5  items-center justify-center mt-5'>
               <Image
                  src={term}
                   alt="Picture of the author"
                   width={20}
                   height={10}
                    />
                    <p> I have read and accept the <span className={style.priceTax}>Terms and Conditions.</span></p>
               </div> 
               <button type='submit' className={style.termBtn}>Send your payment</button>
          </div>


          </form>
      </div>
    </div>
  )
}

export default Payment
