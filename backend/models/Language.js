// models/Language.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Chapter = require('./Chapter');

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String },
  description: { type: String },
  trend: { type: Number, default: 0 },
  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }]
});

// PRE-HOOK: Before language is removed
languageSchema.pre('remove', async function (next) {
  try {
    // Delete logo file
    if (this.logo?.startsWith('/uploads')) {
      const logoPath = path.join(__dirname, '..', this.logo);
      if (fs.existsSync(logoPath)) {
        fs.unlinkSync(logoPath);
      }
    }

    // Delete all related chapters (triggers their pre-remove too)
    for (const chapterId of this.topics) {
      const chapter = await Chapter.findById(chapterId);
      if (chapter) await chapter.remove();
    }

    next();
  } catch (err) {
    next(err);
  }
});

const Language = mongoose.model('Language', languageSchema);
module.exports = Language;
