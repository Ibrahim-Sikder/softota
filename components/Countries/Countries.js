import React from 'react'
import style from './Countries.module.css'
import Image from 'next/image';
import malasiya from '../../public/malasiya.png'
const Countries = () => {
  return (
    <div className='my-10'>
          <div className='w-[500px] mx-auto text-center' >
               <h2 className='text-2xl font-bold capitalize'>Top visited countries</h2>
               <p>The Top Ranking of Most Visited Countries in the World is based on the most recent available numbers of visitors a country</p>
          </div>
          <div className='w-9/12 h-3/4 mx-auto p-10 bg-[#DBF0DB]'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center'>
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <button className='btn text-center bg-[#4AB449] py-2 px-5 text-white'>View More countries</button>
            </div>

          </div>
    </div>
  )
}

export default Countries
