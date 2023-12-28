import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'




interface NavbarProps {
  scrollToPrices: () => void;
}

function Navbar({ scrollToPrices }: NavbarProps) {

  const router= useRouter()  
  const pricesRef = useRef<HTMLDivElement>(null);

  const handleBuyButtonClick = () => {
    scrollToPrices(); // Call the function passed from the parent to scroll to the Prices component
  };

  return (
    <div className="flex items-center justify-between">
      <h1>
        <img src="/images/Logo.png" className=" w-32 sm:w-44 cursor-pointer" alt="" />
      </h1>

      <div className="space-x-10 hidden md:flex md:text-sm lg:text-base sm:hidden">
        <h3 className="cursor-pointer">Platform</h3>
        <h3 className="cursor-pointer">Solutions</h3>
        <h3 className="cursor-pointer">Company</h3>
        <h3 className="cursor-pointer">Blog</h3>
      </div>

      <div className="space-x-3 hidden md:flex">
        <button onClick={() => router.push("/login")} className="border px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-[#e21f36] text-white text-md font-bold">
          Login
        </button>
        <button
          className="border px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-[#e21f36] text-white text-md font-bold"
          onClick={handleBuyButtonClick}>
          BUY
        </button>
      </div>

      {/* if mobile view */}
      <div className="flex md:hidden">
      <Bars3Icon className="h-8 w-8 "/>
        
      </div>
    </div>
  );
}

export default Navbar;
