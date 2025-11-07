'use client'

import Link from 'next/link';
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
     { href: "/about", label: "About" },
     { href: "/works", label: "Works" },
     { href: "/schedule", label: "Schedule" }
   ];

  return (
    <header className="relative w-full border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          ssinfo
        </Link>
        <button
          className="md:hidden text-gray-700 text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`
            // mobile
            absolute top-full right-0 w-auto bg-white dark:bg-gray-800 border-t border-gray-200
            flex flex-col items-start space-y-2 text-sm
            px-6 py-4 shadow-md z-10
            // PC
            md:static md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6
            md:bg-transparent md:border-t-0 md:p-0 md:shadow-none md:justify-end md:w-auto
            md:dark:bg-transparent
            ${isOpen ? "flex" : "hidden"} md:flex
          `}
        >
          {navLinks.map((link) => (
            <Link href={link.href} className="hover:underline text-gray-700 dark:text-gray-300 w-full md:w-auto">
              {link.label}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;
