const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    console.log('📥 Courses fetched from MongoDB:', courses); // Log all courses fetched
    res.json(courses);
  } catch (error) {
    console.error('❌ Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Create a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, instructor } = req.body;
    const newCourse = new Course({ title, description, instructor });

    console.log('📥 Received data for new course:', req.body); // Log data received in the POST request

    const savedCourse = await newCourse.save();
    console.log('✅ Course saved to MongoDB:', savedCourse); // Log saved course data
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error('❌ Error saving course:', error);
    res.status(500).json({ error: 'Failed to save course' });
  }
});

// Update a course
router.put('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('✅ Course updated:', updatedCourse); // Log updated course data
    res.json(updatedCourse);
  } catch (error) {
    console.error('❌ Error updating course:', error);
    res.status(500).json({ error: 'Failed to update course' });
  }
});

// Delete a course
router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    console.log(`✅ Course with ID ${req.params.id} deleted`);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting course:', error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
});

module.exports = router;
