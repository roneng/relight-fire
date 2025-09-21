
export default function GamesPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Games</h1>
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">All</button>
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">Active</button>
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">Completed</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-bold">Game Title 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Short game description.</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">10-15 min</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-bold">Game Title 2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Short game description.</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">5 min</p>
        </div>
      </div>
    </div>
  );
}
