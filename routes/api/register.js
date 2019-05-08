// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// // Load function for validation
// const validateRegisterInput = require("../../validation/register");
// // Load User model
// const User = require("../../models/UserSchema");


// /**
//  * 
//  * @route POST api/users/register
//  * @desc Register user
//  * @access Public
//  * 
//  */
// router.post("/register", (req, res) => {
//     // Form validation, get errors and validation
//     const { errors, isValid } = validateRegisterInput(req.body);
//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             return res.status(400).json({ email: "Email already exists. Try to login or use another email to register." });
//         }
//         const newUser = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
//         // Hash password before saving in database - check response after registration to make sure it's properly hashed
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//                 if (err) throw err;
//                 newUser.password = hash;
//                 newUser
//                     .save()
//                     .then(user => res.json(user))
//                     .catch(err => console.log(err));
//             });
//         });
//     }
//   )}
// );

// module.exports = router;
