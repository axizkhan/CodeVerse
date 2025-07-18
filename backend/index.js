const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_url = 'mongodb://127.0.0.1:27017/codeVerse';


const port = 8080;

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
const userRoute = require("./routes/user.js");
const contactRoute = require("./routes/contact");
const languageRoute = require('./routes/language.js');
const chapterRoute = require('./routes/chapter.js');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require('cors');
const membershipRoutes = require('./routes/membership');
const uploadRoute = require("./routes/upload.js");
const orderRoute = require("./routes/order.js");
const dashboardRoute = require("./routes/dashboard.js");
const path = require('path');
const errorHandler = require('./utils/errorHandler');


main()
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(port, () => {
      console.log("App is listening on port", port);
    });
  })
  .catch((err) => {
    console.log("Failed to connect:", err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

// app.use("/uploads", express.static("uploads"));

// ✅ UPDATED: Add MongoStore to persist session
const sessionOption = {
  secret: "mysuppersecretcode",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongo_url,
    collectionName: "sessions",
    ttl: 10 * 24 * 60 * 60, // 10 days
  }),
  cookie: {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
    sameSite: "lax",
  },
};
app.get("/hii",(req,res)=>{
    res.send("welcome");
    console.log("request come");
});
// 🔁 Set CORS headers manually for static files
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}, express.static(path.join(__dirname, 'uploads')));

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


app.use('/uploads', express.static('uploads'));


app.use("/user", userRoute);
app.use("/api", contactRoute);
app.use("/upload", uploadRoute);
app.use('/language', languageRoute);
app.use('/chapter', chapterRoute);
app.use('/memberships', membershipRoutes);
app.use('/order', orderRoute);
app.use('/admin', dashboardRoute);

// Place this AFTER all routes
app.use(errorHandler);
