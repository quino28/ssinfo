'use client'

import Link from 'next/link';
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          ssinfo
        </Link>
        <button
          className="md:hidden text-gray-700 text-xl focus:outline-none"
          onClick={ () => setIsOpen(!isOpen) }
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`
            header-hamburger
            absolute top-full right-0 w-auto bg-white border-t border-gray-200
            flex flex-col items-start space-y-2 text-sm
            px-6 py-4 shadow-md z-10 md:hidden
            ${ isOpen ? "block" : "hidden" }
          `}
        >
          <Link href="/about" className="hover:underline w-full md:w-auto">About</Link>
          <Link href="/works" className="hover:underline w-full md:w-auto">Works</Link>
          <Link href="/schedule" className="hover:underline w-full md:w-auto">Schedule</Link>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;
