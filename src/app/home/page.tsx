
export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Good Morning!</h1>
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
