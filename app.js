var PORT = process.env.PORT || 8080;
let multer = require("multer"),
  bodyParser = require("body-parser"),
  express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  app = express(),
  index = require('./routes/index');
require('dotenv').config();

mongoose.connect(`mongodb+srv://laith:zzbawsoldd12@cluster0.7wsww.mongodb.net/chefo?retryWrites=true&w=majority`, {
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
// Serve only the static files form the dist directory
console.log('working');
app.get('*', function(req,res) {
  console.log('working');

res.sendFile(path.join(__dirname, 'dist','index.html'));
});


app.listen(PORT, () => {
  console.log("Server is Listening on port :", PORT);
});