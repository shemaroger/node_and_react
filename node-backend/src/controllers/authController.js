const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
  // User registration
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Validation
      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Name, email, and password are required'
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: 'Password must be at least 6 characters long'
        });
      }

      // Check if user already exists
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'User already exists with this email'
        });
      }

      // Create user
      const newUser = await User.create({ name, email, password });

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: newUser.id, 
          email: newUser.email 
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
          user: newUser,
          token: token
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({
        success: false,
        message: 'Error during registration',
        error: error.message
      });
    }
  },

  // User login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validation
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email and password are required'
        });
      }

      // Find user
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      // Verify password
      const isPasswordValid = await User.verifyPassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email 
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      // Return user data (without password)
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at
      };

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: userWithoutPassword,
          token: token
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'Error during login',
        error: error.message
      });
    }
  },

  // Get current user profile
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.userId);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching profile',
        error: error.message
      });
    }
  },

  // Update user profile
  updateProfile: async (req, res) => {
    try {
      const { name, email } = req.body;
      const userId = req.user.userId;

      // Validation
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: 'Name and email are required'
        });
      }

      const updatedUser = await User.update(userId, { name, email });
      
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedUser
      });
    } catch (error) {
      if (error.code === '23505') { // Unique violation
        return res.status(400).json({
          success: false,
          message: 'Email already exists'
        });
      }
      
      res.status(500).json({
        success: false,
        message: 'Error updating profile',
        error: error.message
      });
    }
  }
};

module.exports = authController;