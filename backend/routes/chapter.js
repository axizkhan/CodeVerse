const express = require('express');
const router = express.Router();
const Chapter = require('../models/Chapter');
const Language = require('../models/Language');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');
const { validateChapter } = require('../middleware/validation'); // <-- use middleware

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/chapters/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.html');
  }
});
const upload = multer({ storage });


// ✅ POST /chapter - Add new chapter and link to a language
router.post(
  '/',
  upload.single('content'),
  (req, res, next) => {
    req.body.content = req.file ? `/uploads/chapters/${req.file.filename}` : '';
    next();
  },
  validateChapter, // <-- use validation middleware
  wrapAsync(async (req, res) => {
    const { name, title, content, languageId } = req.body;

    const chapter = new Chapter({
      name,
      title,
      content,
      language: languageId
    });

    const savedChapter = await chapter.save();

    await Language.findByIdAndUpdate(languageId, {
      $push: { topics: savedChapter._id }
    });

    res.status(201).json(savedChapter);
  })
);


// ✅ PUT /chapter/:id - Update chapter with new optional file
router.put(
  '/:id',
  upload.single('file'),
  wrapAsync(async (req, res, next) => {
    const existingChapter = await Chapter.findById(req.params.id);
    if (!existingChapter) {
      return next(new ExpressError('Chapter not found', 404));
    }

    const updatedFields = {
      name: req.body.name,
      title: req.body.title,
      content: req.file
        ? `/uploads/chapters/${req.file.filename}`
        : existingChapter.content
    };

    // Attach updated fields to req.body for validation
    req.body = updatedFields;
    next();
  }),
  validateChapter, // <-- use validation middleware
  wrapAsync(async (req, res) => {
    const updatedChapter = await Chapter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedChapter);
  })
);


// ✅ DELETE /chapter/:id - Remove chapter & unlink from language
router.delete('/:id', wrapAsync(async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);
  if (!chapter) throw new ExpressError('Chapter not found', 404);

  await chapter.remove();
  res.json({ message: 'Chapter deleted successfully' });
}));


module.exports = router;
