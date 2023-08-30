import React from 'react';
import style from './Right.module.css'
import { useState } from 'react';
import Link from 'next/link';
const RightBook = () => {
     const [disabled, setDisabled] = useState(true)
     const handleDisable = ()=>{
          setDisabled(false)
     }
     return (
          <div className={style.rightSide}>
               <div className={style.rightSideWrap}>
                    <h4 className='text-xl'>Your price summary</h4>
                    <div className='flex justify-between bg-[#E9F6E9] px-3 py-2'>
                         <span>Detail</span>
                         <span>Amount</span>
                    </div>
                    <div className={style.priceSummery}>
                         <h6>ADULT x 2</h6>
                         <div className='flex justify-between'>
                              <div>
                                   <div>Base Fare X 2</div>
                                   <div>Tax X 2</div>
                              </div>
                              <div>
                                   <strong>BDT5,590</strong> <br />
                                   <strong>BDT3,590</strong>
                              </div>
                         </div>
                    </div>
                    <div className={style.priceSummery}>
                         <h6>Child x 2</h6>
                         <div className='flex justify-between'>
                              <div>
                                   <div>Base Fare X 2</div>
                                   <div>Tax X 2</div>
                              </div>
                              <div>
                                   <strong>BDT3,590</strong>
                                   <strong>BDT2,590</strong>
                              </div>
                         </div>
                    </div>
                    <div className={style.priceSummery}>
                         <div className='flex justify-between'>
                              <div>
                                   <div>Total Airfare:</div>
                                   <div>Discount</div>
                                   <div>Coupon Discount </div>
                                   <div>Coupon </div>
                                   <div>Covid-19 Test </div>
                                   <div>Travel Insurance Charge </div>
                                   <div>Baggage Protection Charge </div>
                                   <div>Ancillary </div>
                                   <div>GT Convenience Fee</div>
                              </div>
                              
                              <div>
                                   <strong>BDT9,590</strong>
                                   <strong>-BDT1,590</strong>
                                   <strong>-BDT1,590</strong>
                                   <strong>FLYNOW0723</strong>
                                   <strong>BDT 0</strong>
                                   <strong>BDt 80</strong>
                                   <strong>BDt 380</strong>
                                   <strong>BDt 0</strong>
                                   <strong>BDt 426</strong>
                              </div>
                         </div>
                    </div>
                    <div>
                         <hr />
                    </div>
                    <div className={style.priceSummery}>
                         <div className='flex justify-between'>
                              <div>
                                   <div>Total Payable:</div>
                                   
                              </div>
                              
                              <div>
                                   <strong>BDT 1,99,590</strong>
                              </div>
                         </div>
                    </div>
                    <div className={style.payment}>
                   <input onClick={handleDisable} className={style.checkbox} type="checkbox" />
                   <p>I aggree to the <strong>Terms & Condition</strong> and <strong>Privacy Policy</strong> </p>
                    </div>
                   <Link href='/b2bsearch/flight/book'> <input  disable={disabled} className={style.paymentBtn} type="submit" value='Pay Now' /></Link>
               </div>
          </div>
     );
};

export default RightBook;