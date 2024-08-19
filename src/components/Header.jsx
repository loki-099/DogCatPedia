import React from 'react'
import { Link } from 'react-router-dom';

const 
Header = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5'>
      <Link to={'/'}><img src="/assets/icon.png" alt="logo" className='w-[60px]'/></Link>
      <h2 className='text-2xl'>Cats</h2>
    </div>
  )
}

export default Header;
