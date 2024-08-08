import React, { useEffect, useState } from 'react'

const Card = ({breed}) => {
  const [temperaments, setTemperaments] = useState([])

  useEffect(() => {
    splitTemperaments(breed.temperament)
  }, [])

  const splitTemperaments = (breedTemperaments) => {
    let temperaments = breedTemperaments.split(", ")
    setTemperaments(temperaments)
    console.log(temperaments);
  }

  return (
    <div className='border-2 border-[#1F005F] rounded p-2 flex flex-col justify-between gap-y-6'>
      <div className='min-w-fit'>
        <div className='w-full h-0 pt-[100%] overflow-hidden relative rounded-sm'>
          <div className='absolute top-0 right-0 bottom-0 left-0'>
            <img
              src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
              alt={breed.name}
              className='h-full w-full object-cover'/>
          </div>
        </div>
        <p className='font-bold text-xl mt-1 leading-6'>{breed.name}</p>
        <p className='text-[10px]'>Origin: {breed.origin}</p>
        <div className='w-full flex flex-wrap gap-1 mt-[6px]'>
          {temperaments.map(temperament => (
            <span className='inline-flex px-2 py-1 rounded-full border-[1px] border-[#1F005F] text-[14px] leading-3'>{temperament}</span>
          ))}
        </div>
      </div>
      <button className='w-full bg-[#1F005F] text-[#FFF5F9] font-bold text-[14px] leading-[10px] rounded-full py-2'>More Info</button>
    </div>
  )
}

export default Card