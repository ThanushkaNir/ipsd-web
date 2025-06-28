const express = require('express');
const { body, validationResult } = require('express-validator');
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/testimonials
// @desc    Get all testimonials (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      featured 
    } = req.query;

    const query = { status: 'approved' };

    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';

    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Testimonial.countDocuments(query);

    res.json({
      testimonials,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalTestimonials: count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/testimonials
// @desc    Submit testimonial (public)
// @access  Public
router.post('/', [
  body('name', 'Name is required').not().isEmpty(),
  body('role', 'Role is required').not().isEmpty(),
  body('organization', 'Organization is required').not().isEmpty(),
  body('content', 'Content is required').not().isEmpty(),
  body('category', 'Category is required').isIn(['student', 'principal', 'government-official', 'corporate', 'parent', 'general'])
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.json({ message: 'Testimonial submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/testimonials/:id
// @desc    Update testimonial (admin)
// @access  Private
router.put('/:id', [
  auth,
  body('status').optional().isIn(['pending', 'approved', 'rejected'])
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(testimonial);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/testimonials/:id
// @desc    Delete testimonial (admin)
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    await testimonial.remove();
    res.json({ message: 'Testimonial removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 