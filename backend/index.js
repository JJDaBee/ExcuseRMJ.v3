// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// // Default landing page route
// app.get('/', (req, res) => {
//     res.send(`
//         <h1>Welcome to the Landing Page!</h1>
//         <p>This is the default landing page of your application.</p>
//         <div>
//             <a href="/register">Register</a>
//             <a href="/login" style="margin-left: 10px;">Login</a>
//         </div>
//     `);
// });

// // Serve registration page
// app.get('/register', (req, res) => {
//     res.send(
//         '<h1>Register Page</h1><p>Here you can place your registration form.</p>'
//     );
// });

// // Serve login page
// app.get('/login', (req, res) => {
//     res.send('<h1>Login Page</h1><p>Here you can place your login form.</p>');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
