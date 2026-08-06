import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
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
          <h3 className="font-playfair text-lg font-bold text-navy-900 hover:text-navy-600 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-navy-700 text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
