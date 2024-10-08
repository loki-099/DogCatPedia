import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton';
import { CatContext } from './Root';
import Header from '../components/Header';

const Cats = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [catInfos, setCatInfos]  = useContext(CatContext)
  const [searched, setSearched] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    if (catInfos.length == 0) {
      console.log('fetching...');
      axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'x-api-key': 'live_SLnEveffODcIe6W1Di6ahck5Yz0R6gZFEELdMlFpYkmCv5Wt9ID0SKb9Qpbrfoqq'
        }
      }).then((res) => {
        setCatInfos(res.data)
        setIsLoading(false)
      }).catch(err => console.log(err))
    }
    else {
      setIsLoading(false)
    }
  }, [])

  const search = (e) => {
    let searchContent = e.target.value.toLowerCase()
    if (searchContent != "") {
      setIsSearch(true)
      setSearched([])
      catInfos.forEach((breed) => {
        if (breed.name.toLowerCase().search(searchContent) == 0) {
          console.log(breed.name)
          setSearched(array => [...array, breed])
        }
      })
    }
    else {
      setIsSearch(false)
    }
  }

  return (
    <div>
      <Header/>
      <div>
        <div className='relative w-full'>
          <input type="text" className='w-full px-2 py-1 text-xl border-2 border-[#1F005F] bg-transparent text-[#1F005F] rounded' placeholder='Search for cat breeds' onChange={search}/>
          <img src="/assets/search-icon.svg" alt="search" className='absolute w-8 right-0 top-[50%] translate-y-[-50%] mr-2'/>
        </div>
        <p className='inline-block font-bold text-2xl mt-4'>Cat Breeds</p>
        {isSearch && <p className='inline-block float-right font-bold text-xl mt-4'>{searched.length} results</p>}
        <div className='grid grid-cols-2 gap-3'>
          {isLoading && <CardSkeleton cards={8}/>}
          {!isSearch ? catInfos.map(breed => (
            <Card key={breed.id} breed={breed}/>
          )) : searched.map(breed => (
            <Card key={breed.id} breed={breed}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Cats