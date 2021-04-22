let express = require('express'),
    courseRouter=require('./course'),
    instructorRouter=require('./instructor'),
    categoryRouter=require('./categories'),

    router = express.Router();

router.use(courseRouter);
router.use(instructorRouter);
router.use(categoryRouter);


module.exports = router;