
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="password" id="password" placeholder="Create a password" />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Sign Up</button>
          <div className="mt-4 text-center">
            <Link href="/pairing" className="text-sm text-blue-500 hover:underline">Already have a partner? Pair your accounts</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
