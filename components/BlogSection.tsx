"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonHover } from '@/lib/animations';
import { SlideIn, FadeIn } from '@/components/ui/motion';

const BlogSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-900" id="blog">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SlideIn direction="up" className="mb-3">
            <h2 className="heading-medium text-gray-900 dark:text-white">
              Latest Articles
            </h2>
          </SlideIn>
          <SlideIn direction="up" delay={0.1}>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest news, tips, and insights from the world of digital payments.
            </p>
          </SlideIn>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <SlideIn
              key={post.slug}
              direction="up"
              delay={0.1 * (index + 1)}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{post.excerpt}</p>
                    <div className="inline-flex items-center text-primary font-medium">
                      <span>Read more</span>
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </SlideIn>
          ))}
        </div>

        {/* View All CTA */}
        <FadeIn delay={0.4} className="text-center mt-10">
          <motion.a
            href="/blog"
            whileHover={buttonHover}
            className="btn-outline inline-flex items-center space-x-2 dark:border-gray-600 dark:text-white"
          >
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default BlogSection;
