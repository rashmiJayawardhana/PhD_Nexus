// src/controllers/chapter.controller.js
import Chapter from '../models/Chapter.model.js';

// @desc    Get all chapters (published only for public)
// @route   GET /api/chapters
// @access  Public
export const getAllChapters = async (req, res) => {
  try {
    const { includeUnpublished } = req.query;
    
    let query = {};
    
    // Only show published chapters for public access
    if (includeUnpublished !== 'true') {
      query.isPublished = true;
    }
    
    const chapters = await Chapter.find(query)
      .sort('order')
      .select('-__v');

    res.status(200).json({
      success: true,
      count: chapters.length,
      data: chapters
    });
  } catch (error) {
    console.error('Get all chapters error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching chapters',
      error: error.message
    });
  }
};

// @desc    Get single chapter
// @route   GET /api/chapters/:chapterId
// @access  Public
export const getChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId })
      .populate('lastModifiedBy', 'name email');

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    // Check if chapter is published (for public access)
    if (!chapter.isPublished && !req.admin) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not available'
      });
    }

    res.status(200).json({
      success: true,
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching chapter',
      error: error.message
    });
  }
};

// @desc    Get single subtopic
// @route   GET /api/chapters/:chapterId/subtopics/:subTopicId
// @access  Public
export const getSubTopic = async (req, res) => {
  try {
    const { chapterId, subTopicId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    const subTopic = chapter.getSubTopic(subTopicId);

    if (!subTopic) {
      return res.status(404).json({
        success: false,
        message: 'SubTopic not found'
      });
    }

    res.status(200).json({
      success: true,
      data: subTopic
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching subtopic',
      error: error.message
    });
  }
};

// @desc    Create new chapter
// @route   POST /api/chapters
// @access  Private/Admin
export const createChapter = async (req, res) => {
  try {
    const chapterData = {
      ...req.body,
      lastModifiedBy: req.admin._id
    };

    const chapter = await Chapter.create(chapterData);

    res.status(201).json({
      success: true,
      message: 'Chapter created successfully',
      data: chapter
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Chapter with this ID already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating chapter',
      error: error.message
    });
  }
};

// @desc    Update chapter
// @route   PUT /api/chapters/:chapterId
// @access  Private/Admin
export const updateChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findOneAndUpdate(
      { id: chapterId },
      {
        ...req.body,
        lastModifiedBy: req.admin._id
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Chapter updated successfully',
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating chapter',
      error: error.message
    });
  }
};

// @desc    Delete chapter
// @route   DELETE /api/chapters/:chapterId
// @access  Private/Admin
export const deleteChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findOneAndDelete({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Chapter deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting chapter',
      error: error.message
    });
  }
};

// @desc    Toggle publish status
// @route   PATCH /api/chapters/:chapterId/publish
// @access  Private/Admin
export const togglePublishStatus = async (req, res) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    chapter.isPublished = !chapter.isPublished;
    chapter.lastModifiedBy = req.admin._id;
    await chapter.save();

    res.status(200).json({
      success: true,
      message: `Chapter ${chapter.isPublished ? 'published' : 'unpublished'} successfully`,
      data: { isPublished: chapter.isPublished }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error toggling publish status',
      error: error.message
    });
  }
};

// @desc    Reorder chapter
// @route   PATCH /api/chapters/:chapterId/reorder
// @access  Private/Admin
export const reorderChapter = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const { order } = req.body;

    if (typeof order !== 'number') {
      return res.status(400).json({
        success: false,
        message: 'Order must be a number'
      });
    }

    const chapter = await Chapter.findOneAndUpdate(
      { id: chapterId },
      { 
        order,
        lastModifiedBy: req.admin._id
      },
      { new: true }
    );

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Chapter order updated successfully',
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error reordering chapter',
      error: error.message
    });
  }
};

// @desc    Add subtopic to chapter
// @route   POST /api/chapters/:chapterId/subtopics
// @access  Private/Admin
export const addSubTopic = async (req, res) => {
  try {
    const { chapterId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    chapter.subTopics.push(req.body);
    chapter.lastModifiedBy = req.admin._id;
    await chapter.save();

    res.status(201).json({
      success: true,
      message: 'SubTopic added successfully',
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding subtopic',
      error: error.message
    });
  }
};

// @desc    Update subtopic
// @route   PUT /api/chapters/:chapterId/subtopics/:subTopicId
// @access  Private/Admin
export const updateSubTopic = async (req, res) => {
  try {
    const { chapterId, subTopicId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    const subTopicIndex = chapter.subTopics.findIndex(st => st.id === subTopicId);

    if (subTopicIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'SubTopic not found'
      });
    }

    chapter.subTopics[subTopicIndex] = {
      ...chapter.subTopics[subTopicIndex].toObject(),
      ...req.body
    };
    chapter.lastModifiedBy = req.admin._id;
    await chapter.save();

    res.status(200).json({
      success: true,
      message: 'SubTopic updated successfully',
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating subtopic',
      error: error.message
    });
  }
};

// @desc    Delete subtopic
// @route   DELETE /api/chapters/:chapterId/subtopics/:subTopicId
// @access  Private/Admin
export const deleteSubTopic = async (req, res) => {
  try {
    const { chapterId, subTopicId } = req.params;

    const chapter = await Chapter.findOne({ id: chapterId });

    if (!chapter) {
      return res.status(404).json({
        success: false,
        message: 'Chapter not found'
      });
    }

    chapter.subTopics = chapter.subTopics.filter(st => st.id !== subTopicId);
    chapter.lastModifiedBy = req.admin._id;
    await chapter.save();

    res.status(200).json({
      success: true,
      message: 'SubTopic deleted successfully',
      data: chapter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting subtopic',
      error: error.message
    });
  }
};