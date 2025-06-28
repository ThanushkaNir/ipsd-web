const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Please provide a role/position'],
    maxlength: [100, 'Role cannot be more than 100 characters']
  },
  organization: {
    type: String,
    required: [true, 'Please provide organization name'],
    maxlength: [150, 'Organization cannot be more than 150 characters']
  },
  category: {
    type: String,
    enum: ['student', 'principal', 'government-official', 'corporate', 'parent', 'general'],
    required: [true, 'Please provide a category']
  },
  content: {
    type: String,
    required: [true, 'Please provide testimonial content'],
    maxlength: [1000, 'Content cannot be more than 1000 characters']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  programId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  },
  image: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  contactInfo: {
    email: String,
    phone: String
  },
  socialMedia: {
    linkedin: String,
    twitter: String,
    facebook: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for better query performance
testimonialSchema.index({ category: 1, status: 1 });
testimonialSchema.index({ featured: 1, status: 1 });
testimonialSchema.index({ eventId: 1 });
testimonialSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Testimonial', testimonialSchema); 