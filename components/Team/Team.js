import React from 'react'
import style from './Team.module.css'
import Image from 'next/image'
import team from '../../public/team.png'
import team2 from '../../public/team2.png'
import team3 from '../../public/team3.png'
import team4 from '../../public/team4.png'
import TeamSection from '../TeamSection/TeamSection'
const Team = () => {
  return (
    <section className=''>
      <div className={style.teamHead}>
          <h2 className='text-3xl bold'>Our Team </h2>
          <p className='text-xl text-[#738187] '>At Better Work, we are driven by shared standards of excellence, guided by the same integrity, and motivated by a common ambition to improve lives.</p>
      </div>
      <TeamSection/>
      {/* ghuronti team section design */}
      {/* <div className='flex justify-center flex-wrap items-center'>
          <div className={style.singleTeam}>
          <Image
          src={team}
          alt="Picture of the author"
          className={style.aboutMan}
          width={231}
          height={213}
        />
        <h3>Dan REES</h3>
        <span>Better Work Chief</span>
          </div>
          <div className={style.singleTeam}>
          <Image
          src={team2}
          alt="Picture of the author"
          className={style.aboutMan}
          width={231}
          height={213}
        />
        <h3>Dan REES</h3>
        <span>Better Work Chief</span>
          </div>
          <div className={style.singleTeam}>
          <Image
          src={team3}
          alt="Picture of the author"
          className={style.aboutMan}
          width={231}
          height={213}
        />
        <h3>Dan REES</h3>
        <span>Better Work Chief</span>
          </div>
          <div className={style.singleTeam}>
          <Image
          src={team4}
          alt="Picture of the author"
          className={style.aboutMan}
          width={231}
          height={213}
        />
        <h3>Dan REES</h3>
        <span>Better Work Chief</span>
          </div>
      </div> */}
    </section>
  )
}

export default Team
