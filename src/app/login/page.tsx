
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700" type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Login</button>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-500 hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
