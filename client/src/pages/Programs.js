import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of psychological skill development programs designed to meet the needs of different audiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "School Student Development",
                description: "Comprehensive skill development programs for school students focusing on mental health, leadership, and personal growth.",
                duration: "3-6 months",
                format: "In-person & Online"
              },
              {
                title: "University Workshops",
                description: "Specialized workshops for university students covering career guidance, stress management, and professional skills.",
                duration: "1-3 months",
                format: "Hybrid"
              },
              {
                title: "Government Officer Training",
                description: "Professional development programs designed specifically for government officials and public servants.",
                duration: "6-12 months",
                format: "In-person"
              },
              {
                title: "Corporate Training",
                description: "Customized training solutions for corporate organizations focusing on team building and leadership.",
                duration: "1-6 months",
                format: "Custom"
              },
              {
                title: "Professional Skill Building",
                description: "Advanced programs for professionals looking to enhance their psychological and leadership skills.",
                duration: "3-9 months",
                format: "Online"
              },
              {
                title: "One-on-One Counselling",
                description: "Personalized counselling sessions with experienced psychologists for individual growth and development.",
                duration: "Flexible",
                format: "In-person & Online"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {program.duration}</span>
                  <span>Format: {program.format}</span>
                </div>
                <button className="btn-primary w-full">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs; 