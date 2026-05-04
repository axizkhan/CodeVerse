const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Language = require("../models/Language");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const { validateLanguage } = require("../middleware/validation"); // <-- add this

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/languages/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

// POST /languages - Add a new language with file upload
router.post(
  "/",
  upload.single("logo"),
  (req, res, next) => {
    req.body.logo = req.file ? `/uploads/languages/${req.file.filename}` : "";
    next();
  },
  validateLanguage, // <-- use validation middleware
  wrapAsync(async (req, res) => {
    const { name, logo, description, trend } = req.body;
    const lang = new Language({ name, logo, description, trend });
    await lang.save();
    res.status(201).json(lang);
  }),
);

// PUT /languages/:id - Update a language and replace old image if new one is uploaded
router.put(
  "/:id",
  upload.single("logo"),

  // Middleware to set req.body.logo correctly
  (req, res, next) => {
    req.body.logo = req.file
      ? `/uploads/languages/${req.file.filename}`
      : req.body.oldLogo || "";
    next();
  },

  validateLanguage,

  wrapAsync(async (req, res) => {
    const { name, logo, description, trend, oldLogo } = req.body;
    const updateFields = { name, logo, description, trend };

    // ✅ If a new logo is uploaded and oldLogo is different
    if (req.file && oldLogo && oldLogo !== logo) {
      const oldImagePath = path.join(__dirname, "..", oldLogo);

      // ✅ Check if file exists before attempting to delete
      fs.access(oldImagePath, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error("Failed to delete old logo:", err.message);
          });
        } else {
          console.warn(
            `Old logo file not found, skipping delete: ${oldImagePath}`,
          );
        }
      });
    }

    const updatedLang = await Language.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true },
    );

    if (!updatedLang) throw new ExpressError("Language not found", 404);

    res.status(200).json(updatedLang);
  }),
);

// DELETE /languages/:id - Delete a language and its logo
router.delete(
  "/language/:id",
  wrapAsync(async (req, res) => {
    const language = await Language.findById(req.params.id);
    if (!language) throw new ExpressError("Language not found", 404);

    await language.remove();

    res.json({ message: "Language and related data deleted successfully" });
  }),
);

// GET /languages - Get all languages
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const languages = await Language.find();
    res.json(languages);
  }),
);

// GET /languages/all - Get all languages with populated topics
router.get(
  "/all",
  wrapAsync(async (req, res) => {
    console.log("Get request for all language");
    const languages = await Language.find().populate("topics");
    res.status(200).json(languages);
  }),
);

// GET /languages/:id/chapters - Get all chapters for a language
router.get(
  "/:id/chapters",
  wrapAsync(async (req, res) => {
    const language = await Language.findById(req.params.id).populate("topics");
    if (!language) throw new ExpressError("Language not found", 404);
    res.json(language.topics);
  }),
);

module.exports = router;
