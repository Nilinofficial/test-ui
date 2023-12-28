import React from 'react'
import DetailsBox from './DetailsBox'

function Details() {
  return (
    <div className='w-full bg-slate-100 flex flex-col     py-5  '>



  <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-col-1 gap-6 sm:px-6 lg:px-2'  >
  <DetailsBox/>
  <DetailsBox/>
  <DetailsBox/>
  </div>
    </div>
  )
}

export default Details