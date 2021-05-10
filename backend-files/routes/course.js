let express = require('express');
let router = express.Router(),
course = require('./scripts/course');
const multer = require('multer');

const upload = multer({dest:'uploads/'});
// MainRoutes
router.get('/', (req, res) => {
    res.send('Udemy Backend Works!')
})
// Get All Course
router.get('/getCourse', (req, res) => {
    course.getAllCourses(req, res);
});
// Get Course By ID
router.get('/getCourse/:courseId', (req, res) => {
    course.getCourseById(req, res);
});
// Create Courses
router.post('/upload',upload.single('productImage'), (req, res,next) => {
    course.registerCourses(req, res);
});
router.post('/createCourse', (req, res) => {
    course.registerCourses(req, res);
});

// Delete Course By ID
router.get('/deleteCourse/:courseId', (req, res) => {
    course.deleteCourseById(req, res);
});
// Search Course by name and category
router.post('/searchCourse', (req, res) => {
    course.searchCourses(req, res);
});

module.exports = router;