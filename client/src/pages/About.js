import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About IPSD</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Institute of Psychological Skill Development is dedicated to empowering individuals and organizations through comprehensive psychological training and skill development programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bringing up a group of universal people who have a desire to fully explore each other's potentials and serve people according to their own identity rather than others.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A group of humanitarians who well aware of own abilities and presentation skills are utilized to the optimum level.
              </p>
            </motion.div>
          </div>

          {/* Counseling Services / Activities Carried Out */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Counseling Services / Activities Carried Out</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto space-y-2 text-left">
              <li>Conducting capacity development programs for staff (residential/non-residential formats).</li>
              <li>Conducting family support programs.</li>
              <li>Conducting programs to address educational issues (residential/non-residential formats).</li>
              <li>Conducting soft skills development programs for children.</li>
              <li>Conducting leadership training programs (residential/non-residential formats).</li>
              <li>Prioritizing practical training in diploma and certificate courses related to counseling.</li>
              <li>Conducting short-term (10-day) skill development programs on effective presentations.</li>
              <li>Providing counseling services.</li>
              <li>Conducting family counseling sessions.</li>
              <li>Providing practical training opportunities for counseling trainees.</li>
            </ul>
          </div>

          {/* Collaborating Institutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Collaborating Institutions</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <img src="/assets/collaborators/connect-with-life.png" alt="Connect with Life Institute" className="w-20 h-20 object-contain rounded-full border border-primary-200" />
                <div>
                  <h4 className="text-lg font-semibold">Connect with Life Institute</h4>
                  <p className="text-gray-600">Number of Participants: 7</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/assets/collaborators/kpr.png" alt="KPR Institute of Engineering Technology Green campus" className="w-20 h-20 object-contain rounded-full border border-primary-200" />
                <div>
                  <h4 className="text-lg font-semibold">KPR Institute of Engineering Technology Green campus</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Collaborating Companies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Collaborating Companies</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <img src="/assets/XSoftUs/xsoftuslogo.png" alt="XSoftUs" className="w-20 h-20 object-contain rounded-full border border-primary-200 mb-2" />
                <span className="font-semibold">XSoftUs (XSoftUs Software and Technology Company)</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/XSoftUs/edu logo.png" alt="XSoftUs EDU" className="w-20 h-20 object-contain rounded-full border border-primary-200 mb-2" />
                <span className="font-semibold">XSoftUs EDU</span>
              </div>
            </div>
          </div>

          {/* Officials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Officials</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <img src="/assets/officials/img1.jpg" alt="Chairman of Management" className="w-24 h-24 object-cover rounded-full border border-primary-200 mb-2" />
                <span className="font-semibold">Chairman of Management: Mr. B.B. Anura Kanduluyebandara</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/officials/executive-director.png" alt="Executive Director" className="w-24 h-24 object-cover rounded-full border border-primary-200 mb-2" />
                <span className="font-semibold">Executive Director: Mrs. S.B.P.N.S. Pathirana</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/officials/director-training.png" alt="Director of Training" className="w-24 h-24 object-cover rounded-full border border-primary-200 mb-2" />
                <span className="font-semibold">Director of Training: Mr. D.A.A. Mayantha Dissanayake</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from program design to delivery."
                },
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of professional ethics and integrity."
                },
                {
                  title: "Innovation",
                  description: "We continuously innovate and adapt our programs to meet evolving needs."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 