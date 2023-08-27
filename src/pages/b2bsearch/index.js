import React from 'react'
import UserDashBoard from '../../../components/UserDashBoard/UserDashBoard'
import dynamic from "next/dynamic";
const index = () => {
  return (
    <section>
      <UserDashBoard></UserDashBoard>
    </section>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
