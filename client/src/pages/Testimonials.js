import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our participants about their transformative experiences and the positive impact our programs have had on their lives and careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nethmi Perera",
                role: "Student",
                organization: "Anuradhapura Central College, Sri Lanka",
                content: "The leadership workshop completely changed my perspective. I now feel more confident and capable of taking on challenges.",
                rating: 5
              },
              {
                name: "Mr. T.N Hettiarachchi",
                role: "CEO/Founder",
                organization: "XSoftUs Software and Technology Company / XSoftUs_EDU",
                content: "The corporate training program helped our team improve communication and collaboration significantly.",
                rating: 5
              },
              {
                name: "Dr. Meera Patel",
                role: "Principal",
                organization: "St. Mary's School",
                content: "IPSD's programs have been invaluable for our students' personal development and academic success.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 