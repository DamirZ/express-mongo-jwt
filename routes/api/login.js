// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// // Load function for validation
// const validateLoginInput = require("../../validation/login");
// // Load User model
// const User = require("../../models/UserSchema");

// const secretOrKey = require("../../jwt/jwt").secretOrKey;


// /**
//  * 
//  * @route POST api/users/login
//  * @desc Login user and return JWT token
//  * @access Public
//  * 
//  */

// router.post("/login", (req, res) => {
//     // Form validation, get errors and validation
//     const { errors, isValid } = validateLoginInput(req.body);
//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     const email = req.body.email;
//     const password = req.body.password;
//     // Find user by email
//     User.findOne({ email }).then(user => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found. Try to register first." });
//         }
//         // Check password
//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name
//                 };
//                 // Sign token
//                 jwt.sign(
//                     payload,
//                     secretOrKey,
//                     {
//                         expiresIn: 2592000 // Expires in 1 month (written in seconds)
//                     },
//                     (err, token) => {
//                         res.json({
//                             success: true,
//                             token: "Bearer " + token
//                         });
//                     }
//                 );
//             } else {
//                 return res
//                     .status(400)
//                     .json({ passwordincorrect: "Password incorrect. Make sure you've entered correct password." });
//             }
//         });
//     });
// });

// module.exports = router;
