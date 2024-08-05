import React from 'react'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='mx-auto w-[89%] max-w-[400px] md:max-w-[650px] lg:max-w-[865px] pt-4 md:pt-6'>
      <Outlet/>
    </div>
  )
}

export default Root