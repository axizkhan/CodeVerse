// Load environment variables at the top
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoStore = require("connect-mongo");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require('cors');
const path = require('path');

// MongoDB URL and Secret from .env
const mongo_url = process.env.MONGO_URL;
const port = 8080;

// Import models and routes
const User = require("./models/User.js");
const userRoute = require("./routes/user.js");
const contactRoute = require("./routes/contact");
const languageRoute = require('./routes/language.js');
const chapterRoute = require('./routes/chapter.js');
const membershipRoutes = require('./routes/membership');
const uploadRoute = require("./routes/upload.js");
const orderRoute = require("./routes/order.js");
const dashboardRoute = require("./routes/dashboard.js");
const errorHandler = require('./utils/errorHandler');

// Connect to MongoDB
main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

// Session store
const store = MongoStore.create({
  mongoUrl: mongo_url,
  crypto: {
    secret: process.env.SECRET_KEY,
  },
  collectionName: "sessions",
  touchAfter: 24 * 60 * 60, // 24 hours
  ttl: 10 * 24 * 60 * 60, // 10 days
});

store.on("error", function (e) {
  console.error("Session store error:", e);
});

// Session options
const sessionOption = {
  store,
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
    sameSite: "lax",
  },
};

// Simple test route
app.get("/hii", (req, res) => {
  res.send("welcome");
  console.log("request come");
});

// Serve uploads with CORS
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}, express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(session(sessionOption));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use("/user", userRoute);
app.use("/api", contactRoute);
app.use("/upload", uploadRoute);
app.use('/language', languageRoute);
app.use('/chapter', chapterRoute);
app.use('/memberships', membershipRoutes);
app.use('/order', orderRoute);
app.use('/admin', dashboardRoute);

// Global error handler
app.use(errorHandler);
