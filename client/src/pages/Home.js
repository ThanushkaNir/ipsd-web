import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaGraduationCap, FaAward } from 'react-icons/fa';

const heroImages = [
  '/assets/home/img1.jpg',
  '/assets/home/img2.jpg',
  '/assets/home/img3.jpg',
  '/assets/home/img4.jpg',
  '/assets/home/img5.jpg',
  '/assets/home/img6.jpg',
  '/assets/home/img7.jpg',
  '/assets/home/img8.jpg',
  '/assets/home/img9.jpg',
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % heroImages.length);

  // Touch swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Minds,<br />
                <span className="text-yellow-300">Transforming Futures</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Join the Institute of Psychological Skill Development and unlock your potential through comprehensive training programs designed for students, professionals, and organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="btn-secondary text-lg px-8 py-4">
                  Explore Programs
                </Link>
                <Link to="/events" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
                  View Events
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="bg-white/10 backdrop-blur rounded-2xl p-0 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center relative">
                  {heroImages.map((img, idx) => (
                    <img
                      key={img}
                      src={img}
                      alt={`IPSD Hero Slide ${idx + 1}`}
                      className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
                    />
                  ))}
                  {/* Carousel Controls - hidden on mobile */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-primary-600 transition hidden sm:block"
                    aria-label="Previous Slide"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-primary-600 transition hidden sm:block"
                    aria-label="Next Slide"
                  >
                    &#8594;
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {heroImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-primary-600' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <FaUsers className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <FaGraduationCap className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Workshops Conducted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <FaAward className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Corporate Partners</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <FaAward className="text-4xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">97%</h3>
              <p className="text-gray-600">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of psychological skill development programs designed to meet the needs of different audiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "School Student Development",
                description: "Comprehensive skill development programs for school students focusing on mental health, leadership, and personal growth.",
                icon: "🎓",
                link: "/programs"
              },
              {
                title: "University Workshops",
                description: "Specialized workshops for university students covering career guidance, stress management, and professional skills.",
                icon: "🏫",
                link: "/programs"
              },
              {
                title: "Government Officer Training",
                description: "Professional development programs designed specifically for government officials and public servants.",
                icon: "🏛️",
                link: "/programs"
              },
              {
                title: "Corporate Training",
                description: "Customized training solutions for corporate organizations focusing on team building and leadership.",
                icon: "💼",
                link: "/programs"
              },
              {
                title: "Professional Skill Building",
                description: "Advanced programs for professionals looking to enhance their psychological and leadership skills.",
                icon: "🚀",
                link: "/programs"
              },
              {
                title: "One-on-One Counselling",
                description: "Personalized counselling sessions with experienced psychologists for individual growth and development.",
                icon: "🤝",
                link: "/programs"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link to={program.link} className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join thousands of individuals who have already benefited from our programs. Start your journey towards personal and professional excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 