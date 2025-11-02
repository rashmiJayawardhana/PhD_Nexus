// src/models/Chapter.model.js
import mongoose from 'mongoose';

const subTopicSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { _id: false });

const chapterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '📖'
  },
  description: {
    type: String,
    required: true
  },
  subTopics: [subTopicSchema],
  order: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  metadata: {
    learningOutcomes: [String],
    competencies: [String],
    estimatedTime: String,
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'intermediate'
    }
  },
  images: [{
    url: String,
    caption: String,
    altText: String,
    section: String // Which section/subtopic this image belongs to
  }],
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }
}, {
  timestamps: true
});

// Index for faster queries
chapterSchema.index({ isPublished: 1, order: 1 });

// Virtual for full chapter identifier
chapterSchema.virtual('fullTitle').get(function() {
  return `${this.title} - ${this.description}`;
});

// Method to get subtopic by ID
chapterSchema.methods.getSubTopic = function(subTopicId) {
  return this.subTopics.find(st => st.id === subTopicId);
};

// Static method to get all published chapters
chapterSchema.statics.getPublished = function() {
  return this.find({ isPublished: true }).sort('order');
};

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter;