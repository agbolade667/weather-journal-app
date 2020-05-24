/* Empty JS object to act as endpoint for all routes */
projectData = [{}];

// Require Express server
const express = require('express');

// Start up an instance of Express app
const app = express();

//Added body-parser dependency
const bodyParser = require('body-parser');

// Express configurAtions for body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require Cors
const cors = require('cors');
app.use(cors());

// Initialization of the main project folder
app.use(express.static('weather-journal-app'));

const port = 8000;

// Start the server
const server = app.listen(port, listening());

//Call back function
function listening() {
  console.log('server running');
  console.log(`running on location: ${port}`);
}

// POST method route
app.post('/addData', function (req, res) {
  projectData.push(req.body);
  res.send('Success!');
})

app.get('/', function (req, res) {
  res.send(projectData);
})

