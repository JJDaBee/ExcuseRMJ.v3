// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register a new user
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
};

// Authenticate user and get token
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create and send JWT
    const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    res.json({ token });
};

// Function to get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Server error, could not retrieve users',
        });
    }
};

module.exports = { registerUser, loginUser, getAllUsers };
