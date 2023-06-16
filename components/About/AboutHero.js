import React from 'react'
import style from './AboutHero.module.css';
import Image from 'next/image';
import about from '../../public/about.png';
import VectorMan from '../../public/VectorMan.png';


const AboutHero = () => {
  return (
     <div>
      <section className={style.aboutHero}>
      <Image
          src={about}
          alt="Picture of the author"
          className={style.aboutHeroImg}
     />
      <h2 className={style.aboutHead}>The goal as a company is to have customer service that is not just the best but legendary.</h2>
     </section>
     <section className='py-28'>
      <div className='flex justify-center items-center'>
        <div className={style.leftBox}>
        <Image
          src={VectorMan}
          alt="Picture of the author"
          className={style.aboutMan}
        />
        </div>
        <div className={style.rightBox}>
          <div>
          <h2 className='text-4xl bold'>Ibrahim Sikder</h2>
          <p className='text-xl'>Directior</p>
          <hr className='mb-5 mt-2 border-black'/>
          <p>THE Ghuronti GROUP HAS STARTED OPERATION AS A REAL ESTATE VENTURE KNOWN AS Ghuronti UNDER THE AEGIS OF THE GROUP S FIRST CONCERN - THE EAST-WEST PROPERTY DEVELOPMENT (PVT) LTD IN 1987.</p>
          </div>
        </div>
      </div>
     </section>
     </div>
  )
}

export default AboutHero
