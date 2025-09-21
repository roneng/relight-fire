
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          CouplesApp
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/home" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</Link>
          <Link href="/questions" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Questions</Link>
          <Link href="/games" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Games</Link>
          <Link href="/chat" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Chat with AI</Link>
          <Link href="/profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Profile</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 dark:text-gray-300">EN/HE</button>
          <button className="relative text-gray-600 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
