let Instructor = require('../../models/instructor');
module.exports = {

    registerInstructor: async function (req, res) {
        try {
            let User = await Instructor.create({
                name: req.body.name,
                image:req.body.image,
                students: req.body.students ? req.body.students : 0,
                revenue:req.body.revenue ? req.body.revenue : 0
            });
            res.send({ "Success": true, "message": "Instructor has been registered!" })

        } catch (error) {
            res.send({ "Success": false, err })
        }
    },

    getInstructorById: async (req, res) => {
        const id = req.params.instructorId;
        try {
            Instructor.findById(id, function(err, result) {
                if (err) {
                  res.send(err);
                } else {
                  res.json(result);
                }
              });

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