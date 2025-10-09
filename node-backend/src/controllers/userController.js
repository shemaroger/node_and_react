const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({
        success: true,
        data: users,
        count: users.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching users',
        error: error.message
      });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      
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
        message: 'Error fetching user',
        error: error.message
      });
    }
  },

  // Create new user
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Basic validation
      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Name, email, and password are required'
        });
      }

      const newUser = await User.create({ name, email, password });
      
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
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
        message: 'Error creating user',
        error: error.message
      });
    }
  }
};

module.exports = userController;