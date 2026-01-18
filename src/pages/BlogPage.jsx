// src/pages/BlogPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      slug: 'web-development-trends-2024',
      title: 'Web Development Trends in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development...',
      image: '/images/blog/post1.jpg',
      category: 'Development',
      author: 'John Doe',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
    },
    {
      slug: 'ui-ux-design-principles',
      title: 'Essential UI/UX Design Principles',
      excerpt: 'Master the fundamental principles of creating user-centric designs...',
      image: '/images/blog/post2.jpg',
      category: 'Design',
      author: 'Jane Smith',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
    },
    // Add more posts...
  ];

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;