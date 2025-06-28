const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  category: {
    type: String,
    enum: ['event', 'workshop', 'seminar', 'training', 'general'],
    required: [true, 'Please provide a category']
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: [true, 'Please specify media type']
  },
  mediaUrl: {
    type: String,
    required: [true, 'Please provide media URL']
  },
  thumbnailUrl: {
    type: String
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  tags: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  views: {
    type: Number,
    default: 0
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  metadata: {
    size: Number,
    format: String,
    duration: Number, // for videos
    dimensions: {
      width: Number,
      height: Number
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
gallerySchema.index({ category: 1, type: 1 });
gallerySchema.index({ eventId: 1 });
gallerySchema.index({ featured: 1 });
gallerySchema.index({ createdAt: -1 });

module.exports = mongoose.model('Gallery', gallerySchema); 