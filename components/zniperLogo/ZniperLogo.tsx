import Link from 'next/link'
import React from 'react'

function ZniperLogo() {
  return (
    <h1
    className={` w-full  flex   xl:max-w-screen-2xl lg:max-w-full `}>

<Link className="py-2" href="/">
<img
    src="images/navLogo.png" 
   className=' h-12'
  alt='logo'
  />
</Link>

  </h1>
  )
}

export default ZniperLogo