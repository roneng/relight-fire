
'use client';

import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mr-4"></div>
        <div>
          <h1 className="text-3xl font-bold">Alex</h1>
          <p className="text-gray-500">alex@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <button className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow">Account Settings</button>
        <button className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow">Notifications</button>
        <button className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow">Subscription</button>
        <button onClick={handleLogout} className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow">Logout</button>
      </div>
    </div>
  );
}
