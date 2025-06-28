import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of our community and contribute to the mission of psychological skill development. We welcome volunteers, partners, and collaborators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Opportunities</h2>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers and help us make a difference in people's lives through psychological skill development.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>• Event coordination and support</li>
                <li>• Workshop facilitation assistance</li>
                <li>• Community outreach programs</li>
                <li>• Administrative support</li>
              </ul>
              <button className="btn-primary">Apply to Volunteer</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Programs</h2>
              <p className="text-gray-600 mb-6">
                Partner with us to expand the reach of psychological skill development programs and create lasting impact in communities.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>• Corporate partnerships</li>
                <li>• Educational institution collaborations</li>
                <li>• Government agency partnerships</li>
                <li>• Research collaborations</li>
              </ul>
              <button className="btn-primary">Partner With Us</button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to make a difference? Contact us to learn more about how you can get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-outline">Download Information</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Join; 