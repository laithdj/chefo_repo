let express = require('express'),
    courseRouter=require('./course'),
    instructorRouter=require('./instructor'),
    router = express.Router();

router.use(courseRouter);
router.use(instructorRouter);

module.exports = router;