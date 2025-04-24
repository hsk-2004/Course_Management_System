require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Course = require('./models/course'); // Adjust the path to your Course model

// Read the JSON file
const courses = JSON.parse(fs.readFileSync('./courses.json', 'utf-8'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ Connected to MongoDB');

  // Optional: clear existing data
  await Course.deleteMany({});
  console.log('🧹 Existing courses deleted');

  // Insert data from JSON file
  await Course.insertMany(courses);
  console.log('✅ Courses imported successfully');
  
  process.exit();
})
.catch((err) => {
  console.error('❌ Error connecting or importing:', err);
  process.exit(1);
});
