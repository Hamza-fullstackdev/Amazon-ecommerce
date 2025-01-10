export default async function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex items-center justify-center p-6 rounded-lg shadow-md bg-white w-1/3 text-center">
        <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
