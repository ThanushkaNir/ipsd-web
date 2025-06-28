const express = require('express');
const { body, validationResult } = require('express-validator');
const News = require('../models/News');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/news
// @desc    Get all news (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      featured,
      search 
    } = req.query;

    const query = { status: 'published' };

    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } }
      ];
    }

    const news = await News.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('author', 'name')
      .exec();

    const count = await News.countDocuments(query);

    res.json({
      news,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalArticles: count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/:slug
// @desc    Get news by slug (public)
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const article = await News.findOne({ 
      slug: req.params.slug, 
      status: 'published' 
    }).populate('author', 'name');

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Increment views
    article.views += 1;
    await article.save();

    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news
// @desc    Create news article
// @access  Private
router.post('/', [
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('content', 'Content is required').not().isEmpty(),
  body('excerpt', 'Excerpt is required').not().isEmpty(),
  body('category', 'Category is required').isIn(['mental-health', 'psychology-tips', 'upcoming-initiatives', 'research', 'achievements', 'general'])
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const article = new News({
      ...req.body,
      author: req.user.id,
      publishedAt: req.body.status === 'published' ? new Date() : null
    });

    await article.save();
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/news/:id
// @desc    Update news article
// @access  Private
router.put('/:id', [
  auth,
  body('title', 'Title is required').not().isEmpty(),
  body('content', 'Content is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Set publishedAt if status is being changed to published
    if (req.body.status === 'published' && article.status !== 'published') {
      req.body.publishedAt = new Date();
    }

    const updatedArticle = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedArticle);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/news/:id
// @desc    Delete news article
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    await article.remove();
    res.json({ message: 'Article removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 