import React from 'react'
import PriceBox from './PricesBox'


function Prices() {
  return (
    <div className='space-y-3 pb-8 pt-2' >

{/* <div className='w-full bg-slate-100 flex flex-col     py-5  rounded-md '> */}
   <div className='flex  flex-col  items-center justify-center'>
   <p className='text-red-500'>Security Packages</p>
    
    <div className=' text-xl  font-bold pt-1  w-full flex  justify-center  text-center'>

      <h2>We have different types of pricing plans</h2>
      
    </div>
   </div>
    
    
  {/* <div className='w-full flex flex-col md:flex-row justify-center space-x-5 '> */}


  <div className='grid lg:grid-cols-3 sm:grid-cols-2  xs:grid-col-1 gap-6 md:px-6 lg:px-2'  >
  <PriceBox/>
  <PriceBox/>
  <PriceBox/>
  </div>
    
        </div>
  )
}

export default Prices