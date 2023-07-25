import React from 'react'
import style from './AboutHero.module.css';
import Image from 'next/image';
import about from '../../public/about.png';
import VectorMan from '../../public/VectorMan.png';


const AboutHero = () => {
  return (
     <div className={style.aboutWrap}>
      <section className={style.aboutHero}>
      <Image
          src={about}
          alt="Picture of the author"
          className={style.aboutHeroImg}
     />
      <h2 className={style.aboutHead}>Ghuronti.com is partnering with you to reach your dream destinations.</h2>
     </section>
     <section className='py-28'>
      <div className='flex justify-center flex-wrap-reverse items-center'>
        <div className={style.leftBox}>
        <Image
          src={VectorMan}
          alt="Picture of the author"
          className={style.aboutMan}
        />
        </div>
        <div className={style.rightBox}>
          <div>
          <h2 className='text-4xl bold'>Kaji Ehsan</h2>
          <p className='text-xl'>Directior</p>
          <hr className='mb-5 mt-2 border-black'/>
          <p>Coming soon this information....</p>
          </div>
        </div>
      </div>
     </section>
     </div>
  )
}

export default AboutHero
