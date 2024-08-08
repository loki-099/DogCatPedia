import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Cats = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': 'live_SLnEveffODcIe6W1Di6ahck5Yz0R6gZFEELdMlFpYkmCv5Wt9ID0SKb9Qpbrfoqq'
      }
    }).then((res) => {
      console.log(res.data[0].name);
      setBreeds(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <header className='flex flex-col items-center justify-center'>
        <Link to={'/'}><img src="/assets/icon.png" alt="logo" className='w-[60px]'/></Link>
        <h2 className='text-2xl'>Cats</h2>
      </header>
      <div className='mt-5'>
        <div className='relative w-full'>
          <input type="text" className='w-full px-2 py-1 text-xl border-2 border-[#1F005F] bg-transparent text-[#1F005F] rounded' placeholder='Search for cat breeds'/>
          <img src="/assets/search-icon.svg" alt="search" className='absolute w-8 right-0 top-[50%] translate-y-[-50%] mr-2'/>
        </div>
        <p className='font-bold text-2xl mt-4'>Cat Breeds</p>
        <div className='grid grid-cols-2 gap-3'>
          {breeds.map(breed => (
            <Card key={breed.id} breed={breed}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Cats