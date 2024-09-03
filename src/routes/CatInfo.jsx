import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';
import { CatContext } from './Root';
import '../index.css'


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

  const useDefaultImg = (e) => {
    e.target.src = "/assets/cats.svg"
  }

  return (
    <div>
      <Header/>

      <div>
        <Link to={'/cats'} className='inline-block'><p className='text-xl font-medium underline'>Back</p></Link>
        <div className='mb-3'>
          <img src={`https://cdn2.thecatapi.com/images/${currentBreed.reference_image_id}.jpg`} alt={currentBreed.name}
          className='w-full h-auto max-h-[280px] object-cover object-center' onError={useDefaultImg}/>
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
          <div className='mb-5'>
            <p className='font-bold text-xl mb-1'>Stats</p>
            <div className='flex items-center justify-between'>
              <p className='text-base inline-block'>Affectionate: </p>
              <progress className='progress-bar' value={currentBreed.affection_level} max="5"></progress>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-base inline-block'>Energy: </p>
              <progress className='progress-bar' value={currentBreed.energy_level} max="5"></progress>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-base inline-block'>Vocalisation: </p>
              <progress className='progress-bar' value={currentBreed.vocalisation} max="5"></progress>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-base inline-block'>Intelligence: </p>
              <progress className='progress-bar' value={currentBreed.intelligence} max="5"></progress>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-base inline-block'>Stranger Friendly: </p>
              <progress className='progress-bar' 
              value={currentBreed.stranger_friendly} max="5"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatInfo