'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';

export default function Blog() {
  const allBlogPosts = [
    ...BLOG_POSTS,
    {
      title: 'Understanding Data Plans in Nigeria',
      excerpt: 'A comprehensive guide to choosing the right data plan for your needs.',
      date: 'March 15, 2023',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'understanding-data-plans',
    },
    {
      title: 'The Rise of Digital Payments in Africa',
      excerpt: 'Exploring the growth and future of digital payment solutions across Africa.',
      date: 'February 28, 2023',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'digital-payments-africa',
    },
    {
      title: 'How to Secure Your Digital Transactions',
      excerpt: 'Essential tips to keep your online payments safe and secure.',
      date: 'January 20, 2023',
      image: '/download (1).jpeg',
      slug: 'secure-digital-transactions',
    },
    {
      title: 'Maximizing Your TV Subscription',
      excerpt: 'Get the most value from your TV subscription packages.',
      date: 'December 12, 2022',
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'maximize-tv-subscription',
    },
    {
      title: 'The Evolution of Mobile Money in Nigeria',
      excerpt: 'Tracing the history and development of mobile money solutions in Nigeria.',
      date: 'November 5, 2022',
      image: 'https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      slug: 'evolution-mobile-money',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-primary/90 text-white py-16 md:py-24">
  <div className="container-custom text-center">
    <h1 className="heading-large mb-6">Our Blog</h1>
    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
      Insights, tips, and updates from the world of digital payments and financial technology.
    </p>
  </div>
</section>


      {/* Featured Post */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-gray-900 dark:text-white">Featured Article</h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.pexels.com/photos/8370779/pexels-photo-8370779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Featured Article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary mb-2">April 5, 2023</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  The Future of Financial Companies in Nigeria: Opportunities and Challenges
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nigeria's finance company sector is experiencing rapid growth, transforming how individuals 
                  and businesses handle financial transactions. This article explores the current 
                  landscape, emerging opportunities, and challenges facing the industry.
                </p>
                <Link href="/blog/future-fintech-nigeria" className="btn-primary inline-block">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-medium text-gray-900 dark:text-white">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="inline-flex items-center text-primary font-medium">
                      <span>Read more</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest insights, tips, and updates in the world of digital payments.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white dark:bg-gray-700 dark:placeholder-gray-400"
                />
                <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
