'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Profile {
  name: string;
  partner_id: string;
}

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        if (error) {
          console.error('Error fetching profile:', error);
        } else {
          setProfile(data);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Good Morning, {profile?.name}!</h1>

      {!loading && !profile?.partner_id && (
        <div 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg text-white mb-6 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => router.push('/pairing')}
        >
          <h2 className="text-2xl font-bold mb-2">Connect with Your Partner!</h2>
          <p>It looks like you&apos;re not paired with your partner yet. Click here to go to the pairing page and connect your accounts.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Latest Notifications</h2>
          <ul>
            <li className="border-b border-gray-200 dark:border-gray-700 py-2">Notification 1</li>
            <li className="border-b border-gray-200 dark:border-gray-700 py-2">Notification 2</li>
            <li className="py-2">Notification 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
