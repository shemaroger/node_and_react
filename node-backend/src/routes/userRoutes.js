const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// POST /api/auth/register - User registration
router.post('/register', authController.register);

// POST /api/auth/login - User login
router.post('/login', authController.login);

// GET /api/auth/profile - Get current user profile (protected)
router.get('/profile', auth.verifyToken, authController.getProfile);

// PUT /api/auth/profile - Update user profile (protected)
router.put('/profile', auth.verifyToken, authController.updateProfile);

module.exports = router;