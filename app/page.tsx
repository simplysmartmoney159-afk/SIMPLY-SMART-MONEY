import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'How to Save 50% of Your Income in 12 Months',
      excerpt: 'Discover proven strategies to dramatically increase your savings rate without sacrificing quality of life.',
      category: 'Savings',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf35f?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: '10 Realistic Side Hustles That Can Earn You $1000/Month',
      excerpt: 'Explore practical side gigs that fit around your full-time job and can generate substantial extra income.',
      category: 'Side Hustle',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'The Complete Beginner\'s Guide to Budgeting',
      excerpt: 'Learn the fundamentals of budgeting with step-by-step instructions and practical tools to manage your money.',
      category: 'Budgeting',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1579427669519-d89f40e6c3cc?w=500&h=300&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-50 to-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-6xl font-bold text-navy-900 mb-6">
            Smart Money Starts Here
          </h1>
          <p className="font-sourceSans text-lg sm:text-xl text-navy-700 mb-8 max-w-3xl mx-auto">
            Learn practical strategies for saving more, earning extra income, budgeting effectively, and building wealth—all without the financial jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="btn-primary bg-navy-600 hover:bg-navy-700"
            >
              Explore Articles
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-navy-600 border-navy-600 hover:bg-navy-600 hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-center text-navy-900 mb-12">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💰',
                title: 'Savings Tips',
                description: 'Master the art of saving and building an emergency fund',
              },
              {
                icon: '💻',
                title: 'Make Money Online',
                description: 'Discover ways to earn money from home',
              },
              {
                icon: '🚀',
                title: 'Side Hustles',
                description: 'Turn your skills into extra income streams',
              },
              {
                icon: '📊',
                title: 'Budgeting',
                description: 'Create budgets that actually work for you',
              },
            ].map((category, idx) => (
              <div key={idx} className="card bg-white">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-navy-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-navy-700 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 sm:py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy-900">
              Featured Articles
            </h2>
            <Link href="/blog" className="text-navy-600 hover:text-navy-900 font-sourceSans font-medium">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="card bg-white overflow-hidden cursor-pointer h-full">
                  <div className="relative h-48 mb-4 bg-navy-100 overflow-hidden rounded">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-navy-100 text-navy-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-navy-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-navy-900 hover:text-navy-600 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-navy-700 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">
            Get Money Tips Every Week
          </h2>
          <p className="text-navy-200 mb-8">
            Join thousands of readers getting practical financial advice delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-navy-900 font-sourceSans focus:outline-none focus:ring-2 focus:ring-navy-600"
              required
            />
            <button
              type="submit"
              className="bg-navy-600 hover:bg-navy-700 px-6 py-3 rounded-lg font-sourceSans font-bold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
