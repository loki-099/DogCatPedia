import React from 'react'

const Card = ({breed}) => {
  return (
    <div className='border-2 border-[#1F005F] rounded p-2'>
      <div className='w-full h-[100px] overflow-hidden flex items-start justify-center'>
        <img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} className='w-full'/>
      </div>
      <p>{breed.name}</p>
    </div>
  )
}

export default Card