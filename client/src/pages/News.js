import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, research findings, and insights from the world of psychological skill development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Impact of Psychological Training on Student Performance",
                excerpt: "Recent studies show significant improvements in academic performance and mental well-being among students who participate in psychological skill development programs.",
                date: "March 10, 2024",
                category: "Research"
              },
              {
                title: "5 Essential Skills for Modern Leadership",
                excerpt: "Discover the key psychological skills that every effective leader needs in today's rapidly changing workplace environment.",
                date: "March 8, 2024",
                category: "Leadership"
              },
              {
                title: "Mental Health Awareness in Corporate Settings",
                excerpt: "How organizations can create supportive environments that prioritize employee mental health and well-being.",
                date: "March 5, 2024",
                category: "Corporate"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                  {article.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 