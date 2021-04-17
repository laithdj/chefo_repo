var PORT = process.env.PORT || 8080;
let multer = require("multer"),
  bodyParser = require("body-parser"),
  express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  app = express(),
  index = require('./backend-files/routes/index');
require('dotenv').config();

mongoose.connect(`mongodb+srv://learningdb:udemy0987@learning-db.8mmrf.mongodb.net/learning-db?retryWrites=true&w=majority`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Connected to the Database");
})
  .catch(() => {
    console.log("Could not connected to the Database");
  });


app.use(cors({ origin: '*' }));
app.use(express.static("public"));


app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(index);

app.listen(PORT, () => {
  console.log("Server is Listening on port :", PORT);
});
