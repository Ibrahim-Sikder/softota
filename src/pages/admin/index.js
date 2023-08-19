import React from 'react'

import dynamic from "next/dynamic";
import UserDashBoard from '../../../components/SuperAdmin/UserDashBoard';
const index = () => {
  return (
    <section>
      <UserDashBoard></UserDashBoard>
    </section>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false });
