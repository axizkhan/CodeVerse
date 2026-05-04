const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync"); // <-- import
const Verify = require("../models/Verify");
const { generateEmailToken } = require("../utils/emailTokenGenerator");
const sendEmail = require("../utils/sendEmail");

// SIGNUP Route
router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new ExpressError("All fields are required", 400);
    }

    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    const token = generateEmailToken();
    const verifiedTokenDoc = await Verify.create({
      userId: registeredUser._id,
      token,
    });

    const verifyUrl = `${process.env.FRONTEND_URL}/verify-email/${token}`;

    await sendEmail({
      subject: "Verify Email",
      html: `
          <h2>Email Verification</h2>
          <p>Click the link below to verify your email</p>
          <a href="${verifyUrl}">Verify Email</a>

           <p>Best regards,<br/>
  <strong>Splitly Team</strong></p>
  </div>
          `,
      senderEmail: registeredUser.email,
    });

    res.status(200).json({
      message: "Verified Email Sent Successfuly",
      user: {
        username: registeredUser.username,
        email: registeredUser.email,
      },
    });
  }),
);

router.post("/verify/:token", async (req, res, next) => {
  try {
    console.log("Request  comes");
    const { token } = req.params;

    // 1. Find token document
    const tokenDoc = await Verify.findOne({ token });

    if (!tokenDoc) {
      throw new ExpressError("Invalid or expired token", 400);
    }

    // 2. Find user
    const user = await User.findById(tokenDoc.userId);

    if (!user) {
      throw new ExpressError("User not found", 404);
    }

    // 3. Update user verification
    user.isVerified = true;
    await user.save();

    // 4. Delete token document
    await Verify.findByIdAndDelete(tokenDoc._id);

    // 5. Response
    res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (err) {
    next(err);
  }
});

// LOGIN Route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(new ExpressError(err.message, 500));

    if (!user) {
      return next(
        new ExpressError(info?.message || "Invalid credentials", 401),
      );
    }

    // 🚨 BLOCK UNVERIFIED USERS
    if (!user.isVerified) {
      return next(
        new ExpressError("Please verify your email before logging in", 403),
      );
    }

    req.logIn(user, async (err) => {
      if (err) return next(new ExpressError(err.message, 500));

      try {
        user.status = "Login";
        await user.save();

        return res.status(200).json({
          message: "Login successful",
          user,
        });
      } catch (saveError) {
        return next(new ExpressError("Failed to update user status", 500));
      }
    });
  })(req, res, next);
});
// LOGOUT Route
router.get(
  "/logout",
  wrapAsync(async (req, res) => {
    if (!req.user) {
      throw new ExpressError("No user is currently logged in.", 400);
    }

    // Update status to "Active"
    req.user.status = "Active";
    await req.user.save();

    // Proceed with logout
    await new Promise((resolve, reject) => {
      req.logout((err) => {
        if (err) return reject(new ExpressError(err.message, 500));
        req.session.destroy((err) => {
          if (err) return reject(new ExpressError(err.message, 500));
          res.clearCookie("connect.sid");
          res.json({ message: "Logged out successfully" });
          resolve();
        });
      });
    });
  }),
);

router.get("/check", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    next(new ExpressError("Not Found", 404));
  }
});

router.get(
  "/all",
  wrapAsync(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  }),
);

// Blacklist a user
router.put(
  "/blacklist/:id",
  wrapAsync(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { status: "Blacklisted" },
      { new: true },
    );
    if (!updatedUser) throw new ExpressError("User not found", 404);
    res.status(200).json({ message: "User blacklisted", user: updatedUser });
  }),
);

router.put(
  "/role/:id",
  wrapAsync(async (req, res) => {
    const { role } = req.body;
    if (!["user", "admin"].includes(role)) {
      throw new ExpressError("Invalid role", 400);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true },
    );
    if (!updatedUser) throw new ExpressError("User not found", 404);
    res.status(200).json({ message: "User role updated", user: updatedUser });
  }),
);

module.exports = router;
