'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function PairingPage() {
  const [userCode, setUserCode] = useState('');
  const [partnerCode, setPartnerCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserCode = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('pairing_code')
          .eq('id', user.id)
          .single();
        if (error) {
          console.error('Error fetching user code:', error);
        } else {
          setUserCode(data.pairing_code);
        }
      }
    };
    fetchUserCode();
  }, []);

  const handlePairing = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: { user } } = await supabase.auth.getUser();

    if (user && partnerCode) {
      const { data: partnerProfile, error: partnerError } = await supabase
        .from('profiles')
        .select('id')
        .eq('pairing_code', partnerCode)
        .single();

      if (partnerError || !partnerProfile) {
        setError('Invalid partner code. Please check and try again.');
        setLoading(false);
        return;
      }

      if (partnerProfile.id === user.id) {
        setError('You cannot pair with yourself.');
        setLoading(false);
        return;
      }

      // Start a transaction to ensure both profiles are updated together
      const { error: coupleError } = await supabase.rpc('create_couple_and_update_profiles', {
        user1_id: user.id,
        user2_id: partnerProfile.id
      })

      if (coupleError) {
        setError(coupleError.message);
      } else {
        router.push('/home');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">Pair with Your Partner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Your Code Section */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-inner">
            <h2 className="text-2xl font-bold mb-4">Your Pairing Code</h2>
            <p className="text-lg mb-4">Share this code with your partner so they can connect with you:</p>
            <div className="bg-white dark:bg-gray-600 text-gray-800 dark:text-white text-5xl font-mono p-4 rounded-lg tracking-widest shadow-md">
              {userCode || '...'}
            </div>
          </div>

          {/* Partner's Code Section */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold mb-4">Enter Partner&apos;s Code</h2>
            <form onSubmit={handlePairing}>
              <input 
                className="w-full text-center text-3xl font-mono p-4 border-2 border-dashed rounded-lg dark:bg-gray-600 mb-4 tracking-widest"
                type="text" 
                placeholder="000000"
                value={partnerCode}
                onChange={(e) => setPartnerCode(e.target.value.toUpperCase())}
                required
              />
              <button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                disabled={loading}
              >
                {loading ? 'Pairing...' : 'Pair Accounts'}
              </button>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button 
            onClick={() => router.push('/home')}
            className="text-sm text-blue-500 hover:underline"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
