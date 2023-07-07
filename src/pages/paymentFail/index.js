import Link from 'next/link'
import React from 'react'

const PaymentFailPage = () => {
  return (
    <div>
     <div className="text-center py-24">
     <h2 className=' text-2xl text-red-500 bold'>Your payment fail </h2>
      <Link href='/payment'><button className='bg-green-500 text-white py-3 px-5'>Book again</button></Link>
     </div>
    </div>
  )
}

export default PaymentFailPage
