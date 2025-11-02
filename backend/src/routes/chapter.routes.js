// src/routes/chapter.routes.js
import express from 'express';
import { body, param } from 'express-validator';
import { validate } from '../middleware/validation.middleware.js';
import { protect } from '../middleware/auth.middleware.js';
import * as chapterController from '../controllers/chapter.controller.js';

const router = express.Router();

// Validation rules
const chapterValidation = [
  body('id').notEmpty().withMessage('Chapter ID is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('icon').optional(),
  body('subTopics').isArray().withMessage('SubTopics must be an array'),
  body('subTopics.*.id').notEmpty().withMessage('SubTopic ID is required'),
  body('subTopics.*.title').notEmpty().withMessage('SubTopic title is required'),
  body('subTopics.*.content').notEmpty().withMessage('SubTopic content is required')
];

const subTopicValidation = [
  body('id').notEmpty().withMessage('SubTopic ID is required'),
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required')
];

// Admin routes (protected)
router.post('/', protect, chapterValidation, validate, chapterController.createChapter);
router.put('/:chapterId', protect, chapterValidation, validate, chapterController.updateChapter);
router.delete('/:chapterId', protect, chapterController.deleteChapter);
router.patch('/:chapterId/publish', protect, chapterController.togglePublishStatus);
router.patch('/:chapterId/reorder', protect, chapterController.reorderChapter);

// SubTopic management
router.post('/:chapterId/subtopics', protect, subTopicValidation, validate, chapterController.addSubTopic);
router.put('/:chapterId/subtopics/:subTopicId', protect, subTopicValidation, validate, chapterController.updateSubTopic);
router.delete('/:chapterId/subtopics/:subTopicId', protect, chapterController.deleteSubTopic);

// Public routes
router.get('/', chapterController.getAllChapters);
router.get('/:chapterId', chapterController.getChapter);
router.get('/:chapterId/subtopics/:subTopicId', chapterController.getSubTopic);

export default router;