'javascript'
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { pool } = require('./database/db');
const authRoutes = require('./routes/auth');
const caseRoutes = require('./routes/cases');
const documentRoutes = require('./routes/documents');
const contractRoutes = require('./routes/contracts');
const videoRoutes = require('./routes/video');
const notificationRoutes = require('./routes/notifications');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.FRONTEND_URL]
    }
  }
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection test
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Database connected successfully');
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/notifications', notificationRoutes);

// Socket.io for real-time features
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('join-case', (caseId) => {
    socket.join(`case-${caseId}`);
  });
  
  socket.on('send-message', (data) => {
    io.to(`case-${data.caseId}`).emit('new-message', data);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'SERVER_ERROR'
    }
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
console.log(`ProLegis API running on port ${PORT}`);
});