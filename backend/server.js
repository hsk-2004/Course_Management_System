const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/courses', courseRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
