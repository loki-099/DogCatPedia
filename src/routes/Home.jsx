import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Home = () => {

  const LinkMotion = motion(Link)

  return (
    <div>
      <img src="/assets/logo.svg" alt="logo" />
      <div className='flex items-center justify-around md:px-8 lg:px-14 mt-28 mx-auto w-full'>
        <LinkMotion 
          whileHover={{ scale: 1.1, rotate: 1}} 
          to={'dogs'} 
          className='w-[155px] md:w-[230px] lg:w-[285px] relative'
        >
          <h2 className='text-4xl md:text-[57px] lg:text-[71px] absolute left-[50%] -top-4 translate-x-[-50%] bg-transparent choices tracking-wide'>Dogs</h2>
          <img 
            src="/assets/dogs.svg" 
            alt="Dogs" 
            className='w-full border-[3px] border-[#1F005F] rounded-[3px]'
          />
        </LinkMotion>
        <LinkMotion 
          whileHover={{ scale: 1.1, rotate: 1}} 
          to={'cats'} 
          className='w-[155px] md:w-[230px] lg:w-[285px] relative'
        >
          <h2 className='text-4xl md:text-[57px] lg:text-[71px] absolute left-[50%] -top-4 translate-x-[-50%] bg-transparent choices tracking-wide'>Cats</h2>
          <img 
            src="/assets/cats.svg" 
            alt="Cats" 
            className='w-full border-[3px] border-[#1F005F] rounded-[3px]'
          />
        </LinkMotion>
      </div>
    </div>
  )
}

export default Home