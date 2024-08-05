import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {

  const LinkMotion = motion(Link)

  return (
    <div>
      <img src="/assets/logo.svg" alt="" srcset="" />
      <div className='flex items-center justify-between mt-28 mx-auto w-full max-w-[335px]'>
        <LinkMotion whileHover={{ scale: 1.1, rotate: 1}} to={'dogs'} className='w-[155px] relative'><p className='text-4xl absolute left-[50%] -top-4 translate-x-[-50%] bg-transparent choices tracking-wide'>Dogs</p><img src="/assets/dogs.svg" alt="Dogs" className='w-full border-[3px] border-[#1F005F] rounded-[3px]'/></LinkMotion>
        <LinkMotion whileHover={{ scale: 1.1, rotate: 1}} to={'cats'} className='w-[155px] relative'><p className='text-4xl absolute left-[50%] -top-4 translate-x-[-50%] bg-transparent choices tracking-wide'>Cats</p><img src="/assets/cats.svg" alt="Cats" className='w-full border-[3px] border-[#1F005F] rounded-[3px]'/></LinkMotion>
      </div>
    </div>
  )
}

export default Home