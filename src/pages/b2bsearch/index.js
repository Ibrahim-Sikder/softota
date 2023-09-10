import React from 'react'
import UserDashBoard from '../../../components/UserDashBoard/UserDashBoard'
import dynamic from "next/dynamic";
import Footer from '../../../components/Footer/Footer';
const index = () => {
  return (
    <section>
      <UserDashBoard></UserDashBoard>
      <Footer/>
    </section>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
