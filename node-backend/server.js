const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const User = require('./src/models/userModel');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Initialize database
const initializeDatabase = async () => {
  try {
    await User.createTable();
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Node Backend API with PostgreSQL & JWT Auth!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    database: 'PostgreSQL',
    authentication: 'JWT',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));

// 404 handler - FIXED: Use proper wildcard syntax
// app.use('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found',
//     path: req.originalUrl
//   });
// });

// Alternative 404 handler (if above still causes issues):
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : {}
  });
});

// Start server
app.listen(PORT, async () => {
  await initializeDatabase();
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`📊 PostgreSQL database connected`);
  console.log(`🔐 JWT Authentication enabled`);
});