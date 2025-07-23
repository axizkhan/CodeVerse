const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Language = require('../models/Language');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync'); // <-- import

// Setup Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/languages/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

// POST /language - Add a new language with logo
// router.post('/', upload.single('logo'), wrapAsync(async (req, res) => {
//   const { name, description } = req.body;
//   const logoPath = req.file ? `/uploads/languages/${req.file.filename}` : '';

//   const lang = new Language({
//     name,
//     logo: logoPath,
//     description
//   });

//   await lang.save();
//   res.status(201).json(lang);
// }));

// GET /language - Get all languages
router.get('/', wrapAsync(async (req, res) => {
  const languages = await Language.find();
  res.json(languages);
}));

// GET /language/:id/chapters - Get all chapters of a language
router.get('/:id/chapters', wrapAsync(async (req, res) => {
  const language = await Language.findById(req.params.id).populate('topics');
  if (!language) throw new ExpressError('Language not found', 404);
  res.json(language.topics);
}));

module.exports = router;


