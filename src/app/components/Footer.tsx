
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-t-md z-50 md:hidden">
      <div className="container mx-auto px-4 h-16 flex justify-around items-center">
        <Link href="/home" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/questions" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4-1.742 0-3.223-.835-3.772-2M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 6a6 6 0 110 12A6 6 0 0112 6z"></path></svg>
          <span className="text-xs">Questions</span>
        </Link>
        <Link href="/games" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="text-xs">Games</span>
        </Link>
        <Link href="/chat" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span className="text-xs">Chat</span>
        </Link>
        <Link href="/profile" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
