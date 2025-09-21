
export default function PairingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Pair Your Account</h1>
        <p className="text-center mb-6">Connect with your partner to share your journey.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="partner-code">Partner's Code</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="text" id="partner-code" placeholder="Enter your partner's code" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Pair Accounts</button>
        </form>
      </div>
    </div>
  );
}
