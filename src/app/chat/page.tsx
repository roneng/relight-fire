
export default function ChatPage() {
  return (
    <div className="p-4 h-[calc(100vh-8rem)] flex flex-col">
      <h1 className="text-3xl font-bold mb-4">Chat with AI</h1>
      <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg max-w-xs">
              <p>Hi there! How can I help you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
              <p>I'd like to get some ideas for a date night.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="relative">
          <input className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700" placeholder="Type your message..." />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
