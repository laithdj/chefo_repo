let express = require('express');
let router = express.Router(),
categories = require('./scripts/categories');

// Get All Categories
router.get('/getCategories', (req, res) => {
    categories.getAllCategories(req, res);
});
router.post('/registerCategory', (req, res) => {
    categories.registerCategory(req, res);
});
/*
// Get Instructor By ID
router.get('/getInstructor/:instructorId', (req, res) => {
    instructor.getInstructorById(req, res);
});
// Delete Instructor By ID
router.get('/deleteInstructor/:instructorId', (req, res) => {
    instructor.deleteInstructorById(req, res);
});
// Create Instructor
router.post('/createInstructor', (req, res) => {
    instructor.registerInstructor(req, res);
});
// Search Instructor by name and category
router.post('/searchInstructor', (req, res) => {
    instructor.searchInstructor(req, res);
});
*/
module.exports = router;