import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 px-4 py-4 md:px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          ssinfo
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/works" className="hover:underline">Works</Link>
          <Link href="/schedule" className="hover:underline">Schedule</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
