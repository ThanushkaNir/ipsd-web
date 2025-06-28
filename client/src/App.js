import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Join from './pages/Join';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEvents from './pages/admin/AdminEvents';
import AdminGallery from './pages/admin/AdminGallery';
import AdminNews from './pages/admin/AdminNews';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminContacts from './pages/admin/AdminContacts';
import AdminUsers from './pages/admin/AdminUsers';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path="/programs" element={
          <>
            <Navbar />
            <Programs />
            <Footer />
          </>
        } />
        <Route path="/events" element={
          <>
            <Navbar />
            <Events />
            <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Navbar />
            <Gallery />
            <Footer />
          </>
        } />
        <Route path="/news" element={
          <>
            <Navbar />
            <News />
            <Footer />
          </>
        } />
        <Route path="/testimonials" element={
          <>
            <Navbar />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/join" element={
          <>
            <Navbar />
            <Join />
            <Footer />
          </>
        } />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </div>
  );
}

export default App; 