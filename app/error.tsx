'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-playfair text-4xl font-bold text-navy-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-navy-700 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-block bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-lg font-sourceSans font-bold transition-colors"
          >
            Try Again
          </button>
          
            href="/"
            className="inline-block border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-3 rounded-lg font-sourceSans font-bold transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
