import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our upcoming seminars, workshops, and training sessions designed to enhance your psychological skills and personal development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Student Leadership Workshop",
                date: "March 15, 2024",
                time: "10:00 AM - 2:00 PM",
                venue: "IPSD Training Center",
                category: "School"
              },
              {
                title: "Corporate Stress Management",
                date: "March 20, 2024",
                time: "9:00 AM - 5:00 PM",
                venue: "Business District Hall",
                category: "Corporate"
              },
              {
                title: "Government Officer Training",
                date: "March 25, 2024",
                time: "8:00 AM - 4:00 PM",
                venue: "Administrative Complex",
                category: "Government"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                  {event.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.venue}</p>
                </div>
                <button className="btn-primary w-full">Register Now</button>
              </motion.div>
            ))}

            {/* Latest Event: KPR Institute of Engineering Technology Education Workshop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <img
                src="/assets/latest events/kpr/img1.jpg"
                alt="KPR Institute Education Workshop"
                className="w-full h-40 object-cover rounded-lg mb-4 border border-primary-200 shadow"
              />
              <div className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                Special
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">KPR Institute of Engineering Technology Campus INDIA Education Workshop</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📅 29th June 2025</p>
                <p>⏰ 3:00 PM - 5:00 PM</p>
                <p>📍 CTC RECEPTION, ANURADHAPURA</p>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Don't miss our hands-on workshop to explore global opportunities in AI, Robotics, Engineering & Technology! Admission process, scholarships, career opportunities, and industry connections.
              </p>
              <button className="btn-primary w-full">Register Now</button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 