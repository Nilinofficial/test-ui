import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function PriceBox() {

const searchQuery = 'Z002'

  

  return (
      <Link
    href={{
      pathname: "/login",
      query: `plan=${searchQuery}`,
    }}
    
    className='w-full flex flex-col items-center justify-center py-5 bg-white p-5 space-y-3 rounded-lg cursor-pointer border  transition-all duration-500 hover:border-red-400 transform hover:scale-105'>
      <h4 className='font-bold'>Basic</h4>
      <h2 className='text-[#e21f36] font-bold text-4xl'>Free</h2>
      <p className='font-thin text-xs'>/Per month</p>
      < p className='text-sm'>30 Days Product Testing</p>
      <p  className='text-sm' >Upgrade Anytime Protection</p>
      <p className='text-sm'>Unlimited Malware Removal</p>
      <p className='text-sm'>24/7 Live Assistance</p>
      <p  className='text-sm'>Scan Every 12 Hrs</p>
      <p className='text-sm'>Configure Software</p>
      <button className='bg-[#e21f36] p-3 px-4 rounded-full text-sm text-white'>Purchase Free Plan</button>
    </Link>
  );
}

export default PriceBox;
