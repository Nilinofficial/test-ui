'use client'

import Header from '@/components/header/Header'
import React from 'react'
import { useParams } from 'next/navigation'
import Sidebar from '@/components/sidebar/Sidebar'

function Projects() {
  const params = useParams()
  console.log(params);
  

  return (
    <div className='flex flex-col lg:flex-row h-screen md:overflow-y-hidden bg-white '>
      <Sidebar />
   <div className="flex flex-col  w-full overflow-y-auto h-screen pb-5 bg-[#ffffff] space-y-6 px-2  ">
   <Header headerName="projects" buttonName='Add Projects'/>

<h1>Projects</h1>
   </div>
    </div>
  )
}

export default Projects