import React from 'react'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='mx-auto w-[89%] max-w-[400px] pt-4'>
      <Outlet/>
    </div>
  )
}

export default Root