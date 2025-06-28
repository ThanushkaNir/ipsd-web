import React from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage all aspects of the IPSD website from this dashboard.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Events', link: '/admin/events' },
              { title: 'Gallery', link: '/admin/gallery' },
              { title: 'News', link: '/admin/news' },
              { title: 'Testimonials', link: '/admin/testimonials' },
              { title: 'Contacts', link: '/admin/contacts' },
              { title: 'Users', link: '/admin/users' },
            ].map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-8 text-center hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-primary-600">Manage {item.title.toLowerCase()}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard; 