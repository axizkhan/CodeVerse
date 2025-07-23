// Load environment variables at the top
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cors = require('cors');
const path = require('path');

// Express App
const app = express();

// ✅ Environment variables
const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT || 8080;
const secret = process.env.SECRET_KEY;
const frontendUrl = process.env.FRONTEND_URL;

// Enhanced environment logging
console.log('Environment check:', {
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
  PORT: port
});

//  Validate required .env variables
if (!mongo_url || !port || !secret || !frontendUrl) {
  console.error("❌ Missing required environment variables in .env");
  process.exit(1);
}

// MongoDB Connection
async function main() {
  await mongoose.connect(mongo_url);
}
main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

// Session Store
const store = MongoStore.create({
  mongoUrl: mongo_url,
  crypto: { secret },
  collectionName: "sessions",
  touchAfter: 24 * 60 * 60,
  ttl: 10 * 24 * 60 * 60, // 10 days
});
store.on("error", (e) => console.error("❌ Session store error:", e));

const isProduction = process.env.NODE_ENV === 'production';

const sessionOption = {
  store,
  secret,
  resave: false,
  saveUninitialized: false,
  name: 'connect.sid',
  cookie: {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
    sameSite: 'none', // ✅ Enable cross-site cookies
    secure: true, // ✅ HTTPS required for Render
  },
};

// ✅ CORRECT MIDDLEWARE ORDER - CRITICAL!
//  Basic middleware first
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS before session
app.use(cors({
  origin: function(origin, callback) {
    console.log('CORS origin check:', origin);
    
    // Allow requests with no origin (Postman, mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:3000',
      'http://localhost:5173',
      'https://localhost:3000',
    ].filter(Boolean);
    
    console.log('Allowed origins:', allowedOrigins);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// Preflight handling
app.options('*', cors());

// ✅ SESSION MIDDLEWARE - MUST BE BEFORE PASSPORT AND DEBUG
app.use(session(sessionOption));

// ✅ PASSPORT MIDDLEWARE - AFTER SESSION
app.use(passport.initialize());
app.use(passport.session());

//  Passport Configuration
const User = require("./models/User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ DEBUG MIDDLEWARE - AFTER SESSION AND PASSPORT
app.use((req, res, next) => {
  console.log('\n--- Request Debug Info ---');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Origin:', req.get('origin'));
  console.log('X-Forwarded-Proto:', req.get('x-forwarded-proto'));
  console.log('Session ID:', req.sessionID);
  console.log('User authenticated:', req.isAuthenticated());
  console.log('Cookies received:', req.get('cookie') ? 'YES' : 'NO');
  console.log('Raw cookies:', req.get('cookie'));
  console.log('User:', req.user ? req.user.username : 'None');
  console.log('--- End Debug ---\n');
  next();
});

// Test route
app.get('/test-https', (req, res) => {
  res.json({
    protocol: req.protocol,
    secure: req.secure,
    headers: {
      'x-forwarded-proto': req.get('x-forwarded-proto'),
      'x-forwarded-host': req.get('x-forwarded-host'),
    },
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    sessionID: req.sessionID,
    isAuthenticated: req.isAuthenticated(),
    cookies: req.get('cookie') || 'No cookies'
  });
});

//  Serve Static Uploads with CORS
app.use('/uploads', cors({
  origin: frontendUrl,
  credentials: true
}), express.static(path.join(__dirname, 'uploads')));

//  Routes
app.get("/", (req, res) => {
  res.send("✅ Welcome to CodeVerse API");
});

app.get("/hii", (req, res) => {
  res.send("✅ Hello! Server is running");
  console.log("✅ /hii route was hit");
});

app.use("/user", require("./routes/user"));
app.use("/api", require("./routes/contact"));
app.use("/upload", require("./routes/upload"));
app.use("/language", require("./routes/language"));
app.use("/chapter", require("./routes/chapter"));
app.use("/memberships", require("./routes/membership"));
app.use("/order", require("./routes/order"));
app.use("/admin", require("./routes/dashboard"));

// Global Error Handler
const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);