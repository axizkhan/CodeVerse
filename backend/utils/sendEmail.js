const { BrevoClient } = require("@getbrevo/brevo");
require("dotenv").config();

const client = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

const sendEmail = async ({ subject, html, senderEmail = null }) => {
  try {
    await client.transactionalEmails.sendTransacEmail({
      sender: {
        email: process.env.BREVO_EMAIL,
        name: "CodeVerse",
      },
      to: [{ email: senderEmail ?? process.env.BREVO_EMAIL }], // destination: employee/admin
      subject,
      htmlContent: html,
    });
  } catch (err) {
    console.error("Email error:", err);
  }
};

module.exports = sendEmail;
