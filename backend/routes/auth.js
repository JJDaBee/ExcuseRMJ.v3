// routes/auth.js
const express = require('express');
const {
    registerUser,
    loginUser,
    getAllUsers,
} = require('../controllers/authController');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', loginUser);

// Add a new route to get all users
router.get('/users', getAllUsers);

module.exports = router;
