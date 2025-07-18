// models/Chapter.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Language = require('./Language');

const chapterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true }  // file path
});

// PRE-HOOK: Before chapter is removed
chapterSchema.pre('remove', async function (next) {
  try {
    // Remove from Language.topics
    await Language.updateMany({ topics: this._id }, { $pull: { topics: this._id } });

    // Delete file if it exists
    if (this.content?.startsWith('/uploads')) {
      const filePath = path.join(__dirname, '..', this.content);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    next();
  } catch (err) {
    next(err);
  }
});

const Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;
