import React from 'react'
import { Link } from 'react-router-dom';

const Dogs = () => {
  return (
    <div>
      <div>Di pa available idol :D</div>
      <Link to={'/'} className='underline'>Go back</Link>
    </div>
  )
}

export default Dogs