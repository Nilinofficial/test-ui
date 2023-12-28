import React from 'react'
import { SpecsTable } from '../specsTable/SpecsTable'

function Specifications() {
  return (
    <div  className="py-5 px-2 w-full items-center justify-center text-center">
        <h2 className='text-4xl font-bold'>We have different types of pricing plans</h2>

        <div  className="py-5 ">
            <SpecsTable/>
        </div>
    </div>
  )
}

export default Specifications