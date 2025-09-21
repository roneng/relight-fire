'use client';

import Link from 'next/link';

export default function PairingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Pair Your Account</h1>
        <p className="text-center mb-6">Connect with your partner to share your journey. If your partner hasn't signed up yet, you can skip this step and pair later from your profile.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="partner-code">Partner&apos;s Code</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="text" id="partner-code" placeholder="Enter your partner's code" />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4">Pair Accounts</button>
        </form>
        <div className="text-center">
            <Link href="/home" className="w-full inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg">Skip for now</Link>
        </div>
      </div>
    </div>
  );
}
