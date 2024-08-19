import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

export const CatContext = createContext()

const Root = () => {
  const [catInfos, setCatInfos] = useState([])

  return (
    <CatContext.Provider value={[catInfos, setCatInfos]}>
      <div className='mx-auto w-[89%] max-w-[400px] md:max-w-[650px] lg:max-w-[865px] pt-4 md:pt-6'>
        <Outlet/>
      </div>
    </CatContext.Provider>
  )
}

export default Root