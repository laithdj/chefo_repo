let Instructor = require('../../models/instructor');
module.exports = {

    registerInstructor: async function (req, res) {
        try {
            let contactUser = await Instructor.create({
                name: req.body.name,
                description: req.body.description,
                courses: req.body.courses,
                rating: req.body.rating,
            });
            res.send({ "Success": true, "message": "Instructor has been registered!" })

        } catch (error) {
            res.send({ "Success": false, err })
        }
    },

    getInstructorById: async (req, res) => {
        try {
            Instructor.find({ _id: req.params.instructorId }, 'name description courses rating').populate('course').exec(async (err, InstructorDetails) => {
                if (err)
                    console.log(err);
                else {
                    if (InstructorDetails && InstructorDetails[0]) {
                        res.send({ "Success": true, InstructorDetails });
                    } else {
                        res.send({ "Success": false, err });
                    }
                }

            })
        } catch (err) {
            res.send({ "Success": false, err })
        }
    },

    getAllInstructor: async (req, res) => {
        try {
            let Instructors = await Instructor.find({}).sort({ created_at: -1 });
            res.send({ "Success": true, Instructors });
        } catch (err) {
            res.send({ "Success": false, err })
        }
    },

    searchInstructor: async (req, res) => {
        if (req.body.name !== '') {
            Instructor.find({ name: req.body.name }, 'name description courses rating').populate('profileImage').populate('instructor').exec(async (err, searchResults) => {
                res.send({ "Success": true, searchResults });
            });
        } else {
            Instructor.find({}).populate('profileImage').populate('instructor').exec(async (err, searchResults) => {
                res.send({ "Success": true, searchResults });
            });
        }
    },

    deleteInstructorById: async (req, res) => {
        try {
            Instructor.findOneAndDelete({ _id: req.params.instructorId }).exec((err, feedbacks) => {
                if (err)
                    console.log(err);
                else
                    res.send({ "Success": true, "message": "Instructor Deleted Successfully!" });
            })
        } catch (err) {
            res.send({ "Success": false, err })
        }

    },

};