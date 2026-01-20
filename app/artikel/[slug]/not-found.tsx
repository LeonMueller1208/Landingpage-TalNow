import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Artikel nicht gefunden
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Der gesuchte Artikel existiert leider nicht.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/artikel"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Alle Artikel ansehen
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-300 transition-all duration-300"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
