'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [orientation, setOrientation] = useState('');
  const [anniversary, setAnniversary] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Name and email are required');
      return;
    }
    const { error } = await supabase.auth.signUp({
      email, 
      password,
      options: {
        data: {
          name,
          dob,
          sex,
          orientation,
          anniversary,
        }
      }
    });
    if (error) {
      setError(error.message);
    } else {
      router.push('/pairing');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name*</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email*</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="password" id="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="sex">Sex</label>
            <select className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="intersex">Intersex</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="orientation">Sexual Orientation</label>
            <select className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" id="orientation" value={orientation} onChange={(e) => setOrientation(e.target.value)}>
              <option value="">Select...</option>
              <option value="heterosexual">Heterosexual</option>
              <option value="homosexual">Homosexual</option>
              <option value="bisexual">Bisexual</option>
              <option value="pansexual">Pansexual</option>
              <option value="asexual">Asexual</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="anniversary">Wedding Anniversary or Special Date</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="date" id="anniversary" value={anniversary} onChange={(e) => setAnniversary(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Sign Up</button>
          <div className="mt-4 text-center">
            <Link href="/login" className="text-sm text-blue-500 hover:underline">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
