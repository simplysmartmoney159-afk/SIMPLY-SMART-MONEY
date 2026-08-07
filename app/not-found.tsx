import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-playfair text-6xl font-bold text-navy-900 mb-4">
          404
        </h1>
        <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-navy-700 mb-8">
          Sorry, the page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-sourceSans font-bold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-block border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-3 rounded-lg font-sourceSans font-bold transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
