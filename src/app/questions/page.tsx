
export default function QuestionsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Questions</h1>
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">All</button>
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">Waiting for Me</button>
        <button className="py-2 px-4 text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-800 dark:hover:text-gray-200">Answered</button>
      </div>
      <div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
          <h3 className="font-bold">Question Title 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This is a preview of the question...</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Today</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
          <h3 className="font-bold">Question Title 2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">This is a preview of the question...</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Yesterday</p>
        </div>
      </div>
    </div>
  );
}
