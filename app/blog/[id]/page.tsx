import { getPostById, getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogPostProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostById(parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <article className="bg-gradient-to-b from-navy-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-navy-600 hover:text-navy-900 mb-6 font-sourceSans font-medium"
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-navy-500 text-sm">{post.readTime}</span>
              <span className="text-navy-500 text-sm">{post.date}</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-navy-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-navy-700 max-w-3xl">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="rounded-lg overflow-hidden mb-8 h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </article>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy max-w-none">
            <div
              className="blog-content text-navy-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-navy-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-navy-200 rounded-full"></div>
              <div>
                <h3 className="font-playfair font-bold text-navy-900">
                  Simply Smart Money Team
                </h3>
                <p className="text-navy-700">
                  Providing practical financial advice for everyday life.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="font-playfair text-3xl font-bold text-navy-900 mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getAllPosts()
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <article className="card bg-white cursor-pointer">
                      <div className="h-40 mb-4 bg-navy-100 rounded overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-navy-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-navy-700 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <p className="text-navy-600 text-sm font-medium hover:text-navy-900">
                        Read More →
                      </p>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
