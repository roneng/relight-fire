
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to CouplesApp</h1>
      <p className="text-xl mb-8">Strengthen your relationship, one interaction at a time.</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/legal" className="text-sm text-gray-500 hover:underline">Terms of Service & Privacy Policy</Link>
      </div>
    </div>
  );
}
