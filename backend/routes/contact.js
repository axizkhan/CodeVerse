const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');
// const { validateContact } = require('../middleware/validation'); // <-- import from validation.js

router.post(
  "/contact", // <-- use middleware from validation.js
  wrapAsync(async (req, res) => {
    console.log("Contact form submission received:", req.body);
    const { name, email, subject, message } = req.body;

    await sendEmail({
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent to admin successfully" });
  })
);

module.exports = router;
