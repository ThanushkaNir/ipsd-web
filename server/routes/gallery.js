const express = require('express');
const { body, validationResult } = require('express-validator');
const Gallery = require('../models/Gallery');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/gallery
// @desc    Get all gallery items (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 12, 
      category, 
      type,
      featured 
    } = req.query;

    const query = { isPublic: true };

    if (category) query.category = category;
    if (type) query.type = type;
    if (featured) query.featured = featured === 'true';

    const gallery = await Gallery.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('uploadedBy', 'name')
      .exec();

    const count = await Gallery.countDocuments(query);

    res.json({
      gallery,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalItems: count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/gallery
// @desc    Upload gallery item
// @access  Private
router.post('/', [
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('category', 'Category is required').isIn(['event', 'workshop', 'seminar', 'training', 'general']),
  body('type', 'Type is required').isIn(['image', 'video']),
  body('mediaUrl', 'Media URL is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const galleryItem = new Gallery({
      ...req.body,
      uploadedBy: req.user.id
    });

    await galleryItem.save();
    res.json(galleryItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/gallery/:id
// @desc    Update gallery item
// @access  Private
router.put('/:id', [
  auth,
  body('title', 'Title is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const galleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    res.json(galleryItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete gallery item
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }

    await galleryItem.remove();
    res.json({ message: 'Gallery item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 