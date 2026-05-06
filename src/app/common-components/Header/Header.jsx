import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Left Section: Menu + Nav */}
        <div className="flex items-center gap-8">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <button className="p-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <div className="flex items-center gap-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 lg:block hidden mr-4">
                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>

            <Link href="/men" className="relative font-bold text-sm tracking-wide text-gray-800 hover:text-red-500 transition-colors py-5 group">
              MEN
            </Link>
            <Link href="/women" className="font-bold text-sm tracking-wide text-gray-800 hover:text-red-500 transition-colors py-5 group">
              WOMEN
            </Link>
            <Link href="#" className="font-bold text-sm tracking-wide text-gray-800 hover:text-red-500 transition-colors py-5 group">
              SNEAKERS
            </Link>
          </nav>
        </div>

        {/* Center Section: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-end justify-center gap-0.5 group cursor-pointer transition-all hover:scale-[1.02]">
          <div className="w-[28px] h-[28px] overflow-hidden flex items-center shrink-0 relative bottom-[2px]">
            <Image
              src="https://prod-img.thesouledstore.com/static/non-member-logo2.gif?w=100&dpr=1"
              alt="Mascot"
              width={100}
              height={40}
              className="max-w-none h-[38px] object-left"
              unoptimized
            />
          </div>
          <span className="text-[#EE3131] font-[1000] text-[30px] italic tracking-tighter leading-[0.8] select-none">
            Sameer Store
          </span>
        </div>

        {/* Right Section: Search + Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent border-none outline-none text-sm w-full text-gray-600 placeholder:text-gray-400"
            />
            <div className="flex items-center gap-2 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-pointer hover:text-gray-600">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-pointer hover:text-gray-600 border-l border-gray-300 pl-2 ml-1">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
