'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Savings',
    'Side Hustle',
    'Making Money Online',
    'Budgeting',
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-b from-navy-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Money Tips & Strategies
          </h1>
          <p className="text-lg text-navy-700 max-w-3xl mx-auto">
            Explore our collection of articles on budgeting, savings, side hustles, and making money online.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-sourceSans font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-navy-600 text-white'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="card bg-white overflow-hidden cursor-pointer h-full">
                  <div className="relative h-48 mb-4 bg-navy-100 rounded overflow-hidden">
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
                    <h2 className="font-playfair text-lg font-bold text-navy-900 hover:text-navy-600 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-navy-700 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <p className="text-navy-600 text-sm font-medium hover:text-navy-900">
                        Read More →
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-navy-700 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}
