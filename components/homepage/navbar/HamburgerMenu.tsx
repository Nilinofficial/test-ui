export const HamburgerMenu = ({isOpen} :any) => (



    <div className={`absolute top-24 w-full md:hidden px-1 transition-transform duration-500 transform ${
      isOpen ? 'translate-y-0' : '-translate-y-full'
    }`} >
      <div className="bg-white p-4 rounded-md  space-y-3 text-gray-600  ">
        <p className="cursor-pointer hover:text-black " >Platform</p>
        <p className="cursor-pointer  hover:text-black " >Solutions</p>
        <p className="cursor-pointer  hover:text-black " >Company</p>
        <p className="cursor-pointer  hover:text-black " >Blog</p>
  
     
          <button  className="border  px-4 py-2 rounded-md bg-[#e21f36] text-white text-md font-bold">
            Login
          </button>
         
        
      </div>
    </div>
  );
  