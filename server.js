import express from 'express';
import dotenv from 'dotenv';
import logger from './middleware/logger.js';
import requestTime from './middleware/requestTime.js';
import bookRoutes from './routes/bookRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './config/db.js';
import authorRoutes from './routes/authorRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);
app.use(requestTime);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/auth', authRoutes);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API' });
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is my about route', time: req.time });
});

// Handle routes that don't exist
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);

connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
