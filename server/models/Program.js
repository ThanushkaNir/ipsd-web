const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a program title'],
    trim: true,
    maxlength: [150, 'Title cannot be more than 150 characters']
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a program description'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Please provide a short description'],
    maxlength: [300, 'Short description cannot be more than 300 characters']
  },
  category: {
    type: String,
    enum: ['school-student', 'university', 'government-officer', 'professional', 'corporate', 'counselling'],
    required: [true, 'Please provide a category']
  },
  duration: {
    type: String,
    required: [true, 'Please provide program duration']
  },
  format: {
    type: String,
    enum: ['in-person', 'online', 'hybrid'],
    required: [true, 'Please provide program format']
  },
  price: {
    type: Number,
    default: 0
  },
  isFree: {
    type: Boolean,
    default: true
  },
  features: [{
    type: String
  }],
  objectives: [{
    type: String
  }],
  targetAudience: {
    type: String,
    required: [true, 'Please provide target audience']
  },
  prerequisites: [{
    type: String
  }],
  curriculum: [{
    title: String,
    description: String,
    duration: String
  }],
  instructors: [{
    name: String,
    qualification: String,
    experience: String,
    image: String
  }],
  images: [{
    type: String
  }],
  coverImage: {
    type: String,
    required: [true, 'Please provide a cover image']
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'upcoming'],
    default: 'active'
  },
  featured: {
    type: Boolean,
    default: false
  },
  maxParticipants: {
    type: Number,
    default: 0
  },
  currentParticipants: {
    type: Number,
    default: 0
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  schedule: {
    days: [String],
    time: String,
    frequency: String
  },
  location: {
    address: String,
    city: String,
    state: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  testimonials: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Testimonial'
  }],
  relatedEvents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }],
  tags: [{
    type: String
  }],
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  }
}, {
  timestamps: true
});

// Index for better query performance
programSchema.index({ slug: 1 });
programSchema.index({ category: 1, status: 1 });
programSchema.index({ featured: 1, status: 1 });
programSchema.index({ startDate: 1, status: 1 });

// Generate slug before saving
programSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
    
  next();
});

module.exports = mongoose.model('Program', programSchema); 