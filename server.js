/* Empty JS object to act as endpoint for all routes */
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up Express - an instance of Express 
const app = express();

// Body-parser dependency required 
const bodyParser = require('body-parser');

// Addition of Bodyparser; Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors is included for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialization of the main project folder
app.use(express.static('weather-journal-app'));

const port = 8000;
// Start up of the server

const server = app.listen(port, listening());

// Callback function is added 

function listening() {
  console.log('server running');
  console.log(`running on location: ${port}`);
}