'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          ssinfo
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/About" className="hover:underline">About</Link>
          <Link href="/history" className="hover:underline">History</Link>
          <Link href="/calendar" className="hover:underline">Calendar</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
