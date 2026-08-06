import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">
              Simply Smart Money
            </h3>
            <p className="text-navy-200 text-sm">
              Practical money tips for everyday life. Learn to save, earn, and manage your finances wisely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-navy-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-navy-200 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-navy-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Budgeting
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Side Hustles
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Savings Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Money Hacks
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-navy-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-200 hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} Simply Smart Money. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-navy-300 hover:text-white text-sm">
              Twitter
            </a>
            <a href="#" className="text-navy-300 hover:text-white text-sm">
              Instagram
            </a>
            <a href="#" className="text-navy-300 hover:text-white text-sm">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
