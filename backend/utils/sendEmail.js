const nodemailer = require('nodemailer');
require('dotenv').config();


const sendEmail = async ({ subject, html }) => {
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // ✅ loaded from .env
    pass: process.env.GMAIL_PASS,  // ✅ loaded from .env
  },
});

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // destination: employee/admin
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
  console.log("📨 Email sent to admin");
};

module.exports = sendEmail;
