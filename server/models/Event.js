const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide an event title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide an event description'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  date: {
    type: Date,
    required: [true, 'Please provide an event date']
  },
  endDate: {
    type: Date
  },
  time: {
    type: String,
    required: [true, 'Please provide event time']
  },
  venue: {
    type: String,
    required: [true, 'Please provide event venue']
  },
  category: {
    type: String,
    enum: ['school', 'university', 'government', 'corporate', 'public'],
    required: [true, 'Please provide event category']
  },
  targetAudience: {
    type: String,
    required: [true, 'Please provide target audience']
  },
  capacity: {
    type: Number,
    default: 0
  },
  registeredCount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  isFree: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  images: [{
    type: String
  }],
  coverImage: {
    type: String,
    required: [true, 'Please provide a cover image']
  },
  organizer: {
    type: String,
    required: [true, 'Please provide organizer name']
  },
  contactInfo: {
    phone: String,
    email: String
  },
  registrationLink: {
    type: String
  },
  tags: [{
    type: String
  }],
  highlights: [{
    type: String
  }],
  requirements: [{
    type: String
  }],
  testimonials: [{
    name: String,
    role: String,
    comment: String,
    rating: Number
  }]
}, {
  timestamps: true
});

// Index for better query performance
eventSchema.index({ date: 1, status: 1 });
eventSchema.index({ category: 1, status: 1 });
eventSchema.index({ featured: 1 });

module.exports = mongoose.model('Event', eventSchema); 