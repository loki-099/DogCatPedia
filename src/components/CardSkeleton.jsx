import React from 'react'

const CardSkeleton = ({cards}) => {
  return Array(cards).fill(0).map((item,i) => (
      <div className='border-2 border-[#1F005F] rounded p-2 flex flex-col items-center justify-between gap-y-14' key={i}>
        <div className='w-full h-fit'>
          <div className='w-full h-0 pt-[100%] bg-[#DCD3EE] rounded-sm animate-pulse'>
          </div>
          <div className='w-[70%] h-6 rounded-sm bg-[#DCD3EE] animate-pulse mt-2'></div>
        </div>
        <div className='w-full h-8 bg-[#DCD3EE] rounded-full animate-pulse'>
        </div>
      </div>
      ))
}

export default CardSkeleton