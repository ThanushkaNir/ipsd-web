// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  
  // Events endpoints
  EVENTS: `${API_BASE_URL}/api/events`,
  EVENT_BY_ID: (id) => `${API_BASE_URL}/api/events/${id}`,
  
  // Gallery endpoints
  GALLERY: `${API_BASE_URL}/api/gallery`,
  GALLERY_BY_ID: (id) => `${API_BASE_URL}/api/gallery/${id}`,
  
  // News endpoints
  NEWS: `${API_BASE_URL}/api/news`,
  NEWS_BY_ID: (id) => `${API_BASE_URL}/api/news/${id}`,
  
  // Testimonials endpoints
  TESTIMONIALS: `${API_BASE_URL}/api/testimonials`,
  TESTIMONIAL_BY_ID: (id) => `${API_BASE_URL}/api/testimonials/${id}`,
  
  // Contact endpoints
  CONTACTS: `${API_BASE_URL}/api/contacts`,
  
  // Programs endpoints
  PROGRAMS: `${API_BASE_URL}/api/programs`,
  PROGRAM_BY_ID: (id) => `${API_BASE_URL}/api/programs/${id}`,
  
  // Users endpoints
  USERS: `${API_BASE_URL}/api/users`,
  USER_BY_ID: (id) => `${API_BASE_URL}/api/users/${id}`,
};

export default API_BASE_URL; 