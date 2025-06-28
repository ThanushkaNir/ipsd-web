const express = require('express');
const { body, validationResult } = require('express-validator');
const Program = require('../models/Program');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/programs
// @desc    Get all programs (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      status = 'active',
      featured,
      search 
    } = req.query;

    const query = {};

    if (category) query.category = category;
    if (status) query.status = status;
    if (featured) query.featured = featured === 'true';
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { shortDescription: { $regex: search, $options: 'i' } }
      ];
    }

    const programs = await Program.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Program.countDocuments(query);

    res.json({
      programs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalPrograms: count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/programs/:slug
// @desc    Get program by slug (public)
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const program = await Program.findOne({ slug: req.params.slug });
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/programs
// @desc    Create new program
// @access  Private
router.post('/', [
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('description', 'Description is required').not().isEmpty(),
  body('shortDescription', 'Short description is required').not().isEmpty(),
  body('category', 'Category is required').isIn(['school-student', 'university', 'government-officer', 'professional', 'corporate', 'counselling']),
  body('duration', 'Duration is required').not().isEmpty(),
  body('format', 'Format is required').isIn(['in-person', 'online', 'hybrid']),
  body('targetAudience', 'Target audience is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const program = new Program(req.body);
    await program.save();
    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/programs/:id
// @desc    Update program
// @access  Private
router.put('/:id', [
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('description', 'Description is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/programs/:id
// @desc    Delete program
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    await program.remove();
    res.json({ message: 'Program removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 