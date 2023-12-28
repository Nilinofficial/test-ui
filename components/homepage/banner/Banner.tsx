import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:px-0  my-8 space-between w-full items-center  justify-center lg:justify-normal lg:items-start '>

   <div className='lg:w-2/3 w-full px-2'>
   <h1 className=' font-bold space-y-1 '>

     <p className='lg:hidden text-4xl sm:text-5xl md:text-4xl sm:text-center '>Find Your  <span  className='text-[#FF3131]'>Vulnerabilities</span> Before the Attackers Do!</p>


<div className='hidden lg:block lg:text-6xl'>
<p  className=''> Find Your</p>
     <p><span  className='text-[#e21f36]'>Vulnerabilities</span> Before </p>   <p> the Attackers Do!</p>
</div>
 
     </h1>

     <p className='py-8 text-gray-500 text-lg'>
        Zniper is a comprehensive online pentest platform that helps organizations of all sizes identify and fix security vulnerabilities before attackers can exploit them. 
        We uses a variety of automated tools to scan your systems and applications for known vulnerabilities. 
        We will provide you with a detailed report that includes recommendations for remediation if there are any vulnarabilities found.
        </p>

        <p className=' text-gray-500 text-lg'>Submit your websites today and let Zniper scan them periodically, so that you can have a piece of mind.</p>
   </div>
   

<div className=''>
    <img className='sm:max-w-lg lg:max-w-2xl py-5 lg:py-0 lg:w-full' src="/images/banner.png" alt="banner" />
</div>
    </div>
  )
}

export default Banner