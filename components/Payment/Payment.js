import React from 'react'
import style from './Payment.module.css'
import Image from 'next/image';
import payment from '../../public/payment.png';
import payment2 from '../../public/payment2.png';
import payment3 from '../../public/payment3.png'
import payment4 from '../../public/payment4.png'
import payment5 from '../../public/payment5.png';
import term from '../../public/term.png'
const Payment = () => {
  return (
    <div>
      <div className={style.payment}>
          <h2 >Personal Information </h2>
          <form>
               <div className='flex justify-center'>
                    <div className='mr-3 mb-3'>
                    <label>First Name </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='First Name '/>
                    </div>
                    <div className='ml-5'>
                    <label>Last Name </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Last Name '/>
                    </div>
               </div>
               <div className='flex justify-center'>
                    <div className='mr-3 mb-3'>
                    <label>Email </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Email '/>
                    </div>
                    <div className='ml-5'>
                    <label>Password </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Password '/>
                    </div>
               </div> 
               <div className='flex justify-center'>
                    <div className='mr-3 mb-3'>
                    <label>Mobile Number </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Mobile Number'/>
                    </div>
                    <div className='ml-5'>
                    <label>Gender</label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Gender'/>
                    </div>
               </div> 
               <div className='flex justify-center'>
                    <div className='mr-3 mb-3'>
                    <label>Date of Birth </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Date of Birth'/>
                    </div>
                    <div className='ml-5'>
                    <label>Nationality </label> <br/>
                    <input className={style.paymentBtn} name='name' placeholder='Nationality '/>
                    </div>
               </div> 
          </form>

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
               <form className='mb-5'>
                    <lable>Bkash</lable> <br/>
                    <input className={style.bkash} placeholder='Enter Your Number' name='bkash'/>
               </form>
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
               <button className={style.termBtn}>Send your payment</button>
          </div>
         
      </div>
    </div>
  )
}

export default Payment
