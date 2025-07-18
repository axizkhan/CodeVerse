const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync'); // <-- import

// SIGNUP Route
router.post("/signup", wrapAsync(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new ExpressError("All fields are required", 400);
  }

  const newUser = new User({ username, email });
  const registeredUser = await User.register(newUser, password);

  // Auto-login after signup
  await new Promise((resolve, reject) => {
    req.login(registeredUser, (err) => {
      if (err) return reject(new ExpressError("Auto-login after signup failed", 500));
      resolve();
    });
  });

  res.status(200).json({
    message: "Signup successful",
    user: {
      username: registeredUser.username,
      email: registeredUser.email,
    },
  });
}));

// LOGIN Route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(new ExpressError(err.message, 500));
    if (!user) {
      return next(new ExpressError(info?.message || "Invalid credentials", 401));
    }

    req.logIn(user, async (err) => {
      if (err) return next(new ExpressError(err.message, 500));

      // Update user status to "Login"
      try {
        user.status = "Login";
        await user.save();
        return res.status(200).json({ message: "Login successful", user });
      } catch (saveError) {
        return next(new ExpressError("Failed to update user status", 500));
      }
    });
  })(req, res, next);
});

// LOGOUT Route
router.get("/logout", wrapAsync(async (req, res) => {
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
}));

router.get("/check", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    next(new ExpressError("Not authenticated", 401));
  }
});

router.get("/all", wrapAsync(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
}));

// Blacklist a user
router.put("/blacklist/:id", wrapAsync(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { status: "Blacklisted" },
    { new: true }
  );
  if (!updatedUser) throw new ExpressError("User not found", 404);
  res.status(200).json({ message: "User blacklisted", user: updatedUser });
}));

router.put("/role/:id", wrapAsync(async (req, res) => {
  const { role } = req.body;
  if (!["user", "admin"].includes(role)) {
    throw new ExpressError("Invalid role", 400);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  );
  if (!updatedUser) throw new ExpressError("User not found", 404);
  res.status(200).json({ message: "User role updated", user: updatedUser });
}));

module.exports = router;  




// const express=require('express');

// const router=express.Router();
// const User=require("../models/user");
// const passport = require('passport');

// router.post("/signup",async(req,res)=>{
//    console.log("request found");
//    // res.send(req.body);
//    try{
//       let{username,email,password}=req.body;
//    const newUser=new User({email,username});
//    let result=await User.register(newUser,password);
//    req.login(result,(err)=>{
//          if(err){
//             return next(err);
//          }
//          res.redirect("/products")
//    })
//    console.log(result);
//    }catch(err){
//       console.log(err);
//    }
   

// });

// router.post("/login",passport.authenticate("local", { failureRedirect: '/login',failureFlash:true }),async(req,res)=>{
//  console.log("welcome to mobi store");
// });

// router.get("/logout",(req,res)=>{
//    req.logout((err)=>{
//       if(err){
//          next(err);
//       }
//       res.redirect("/products");
//    })
// })

// module.exports=router
