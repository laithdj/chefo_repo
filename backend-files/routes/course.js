const { v4: uuidv4 } = require('uuid');

require('dotenv/config');
let express = require('express');
let router = express.Router(),
course = require('./scripts/course');
const multer = require('multer');
const AWS = require('aws-sdk');
const Product = require("../models/product");
const mongoose = require("mongoose");
const multerS3 = require('multer-s3');


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
})

const storage = multerS3({
  s3,
  bucket: process.env.AWS_BUCKET_NAME,
  acl: 'public-read',
  metadata: function (req, file, cb) {
    cb(null, {fieldName: 'TESTING_META_DATA!'});
  },
  key: function (req, file, cb) {
    cb(null, Date.now().toString())
  }
})
const upload = multer({storage});

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
/*
router.post('/upload',upload.single('productImage'), (req, res,next) => {
    course.registerCourses(req, res);
});*/
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
const imageUpload = upload.single('productImage');

router.post('/upload', function(req, res) {

  imageUpload(req, res, function(err) {

    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
});
const singleUpload = upload.single('productVideo');

router.post('/uploadVideo', function(req, res) {

  singleUpload(req, res, function(err) {

    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
});
/*
router.post("/upload", upload.single('productImage'), (req, res, next) => {
    const product = new Product({
      productImage: req.file.path 
    });
    product
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          data: result,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  router.post("/uploadVideo", upload.single('productVideo'), (req, res, next) => {
    let myFile = req.file.originalname.split(".")
    const fileType = myFile[myFile.length - 1]

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuidv4 ()}.${fileType}`,
        Body: req.file.buffer
    }

    s3.upload(params, (error, data) => {
      if(error){
          res.status(500).send(error)
      }

      res.status(200).send(data)
  })

  });*/

module.exports = router;