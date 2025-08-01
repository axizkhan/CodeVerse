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

//  Environment variables
const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT || 8080;
const secret = process.env.SECRET_KEY;
const frontendUrl = process.env.FRONTEND_URL;
const portfolioUrl = process.env.PORTFOLIO;
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
    console.log(" Connected to MongoDB");
    app.listen(port, () => {
      console.log(` Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err);
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
  cookie: {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
    sameSite: 'lax',
    // secure: isProduction, // only true when in production (HTTPS)
  },
};

//  Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: [frontendUrl,portfolioUrl],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

//  Passport Configuration
const User = require("./models/User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//  Serve Static Uploads with CORS
app.use('/uploads', cors({
  origin: frontendUrl,
  credentials: true
}), express.static(path.join(__dirname, 'uploads')));

//  Routes
app.get("/", (req, res) => {
  res.send(" Welcome to CodeVerse API");
});

app.get("/hii", (req, res) => {
  res.send(" Hello! Server is running");
  console.log(" /hii route was hit");
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
