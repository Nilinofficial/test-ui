import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquare } from '@fortawesome/free-regular-svg-icons';


function DetailsBox() {
  return (

    <div className='flex flex-col bg-white p-6 rounded-lg   transition-all duration-1000 hover:border-none transform hover:scale-105 hover:cursor-pointer shadow-xl '>
          <div className='flex items-center space-x-4'>
        {/* <FontAwesomeIcon icon={faSquare} size='2x' className='text-red-500 icon' /> */}
        <img className='w-12' src="/images/icon.jpg" alt="" />
        <h1 className='font-bold text-lg'>Online Pen Testing</h1>
      </div>
      <p className='text-md font-light text-gray-500 pt-3 pl-3'>
        Submit your websites and Zniper will <br /> periodically scan it for any vulnerabilities.
      </p>

    </div>
  
  )
}

export default DetailsBox