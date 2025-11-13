'use client'

import Link from 'next/link';
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { useTheme } from 'next-themes'

const [isOpen, setIsOpen] = useState(false);
const { resolvedTheme } = useTheme();
const isDarkMode = resolvedTheme === "dark";

const HumbergerEl = () => {
  return (
    <button
      className={`
        md:hidden text-xl focus:outline-none
        ${!isDarkMode ? "text-gray-700" : ""}
      `}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>
  )
};

const NavMenuEl = () => {
  const navLinks = [
     { href: "/about", label: "About" },
     { href: "/works", label: "Works" },
     { href: "/schedule", label: "Schedule" }
   ];

  return (
    <nav
      className={`
        // mobile
        absolute top-full right-0 w-auto border-t border-gray-200
        flex flex-col items-start space-y-2 text-sm
        px-6 py-4 shadow-md z-10
        ${isDarkMode ? "bg-gray-800" : "bg-white"}
        // PC
        md:static md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6
        md:bg-transparent md:border-t-0 md:p-0 md:shadow-none md:justify-end md:w-auto
        ${isDarkMode ? "md:bg-transparent" : ""}
        ${isOpen ? "flex" : "hidden"} md:flex
      `}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            hover:underline w-full md:w-auto
            ${isDarkMode ? "text-gray-300" : "text-gray-700"}
          `}
        >
          {link.label}
        </Link>
      ))}
      <ThemeSwitch />
    </nav>
  );
};

const Header = () => {
  return (
    <header className="relative w-full border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          ssinfo
        </Link>
        <HumbergerEl />
        <NavMenuEl />
      </div>
    </header>
  );
};

export default Header;
