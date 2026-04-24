export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </div>
          <p className="text-gray-400 text-sm italic">
            Track your gaming journey
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {year} GameVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
