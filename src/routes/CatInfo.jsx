import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { CatContext } from './Root';

const CatInfo = () => {
  let {catId} = useParams()
  const [catInfos, setCatInfos] = useContext(CatContext)
  const [currentBreed, setCurrentBreed] = useState({})
  
  useEffect(() => {
    catInfos.map((breed) => {
      if (breed.id == catId) {
        setCurrentBreed(breed)
        console.log(breed.name);
        
      }
    })
    
  }, [])

  return (
    <div>
      <Header/>

      <div>
        <div className='mb-3'>
          <img src={`https://cdn2.thecatapi.com/images/${currentBreed.reference_image_id}.jpg`} alt={currentBreed.name}
          className='w-full h-auto max-h-[280px] object-cover object-center' />
        </div>
        <div>
          <p className='font-bold text-4xl mb-5'>{currentBreed.name}</p>
          <div className='mb-5'>
            <p className='font-bold text-xl mb-1'>Description</p>
            <p className='text-base'>{currentBreed.description}</p>
          </div>
          <div className='mb-5'>
            <p className='font-bold text-xl mb-1'>Life Span</p>
            <p className='text-base'>{currentBreed.life_span} years.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatInfo