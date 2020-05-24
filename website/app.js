/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Information to reach API
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
apiKey = '3de175b0afe436223913b04c6942d445';
queryParams = '&units=metric&APPID=';

// Selection of page elements
const inputField = document.getElementById('zip');
const submit = document.getElementById('generate');
const tempHolder = document.getElementById('temp');


 const getLocation = (zipCode) => {
  let location = "";

  if(isNaN(parseInt(zipCode))) {
    zipCode = zipCode.split(" ");
    zipCode = zipCode.join("");
    zipCode = zipCode.slice(0, 3);

    location = zipCode + ',ca';
  } else {
    location = zipCode + ',us';
  }

  return location;
 }

// Used AJAX call to retrieve temperature from the Open Weather Map API
const getTemp = async () => {

  const query = inputField.value;
  // Here, you obtain the first 3 characters of the zipcode entered
  const location = getLocation(query);
  const endpoint = url + location + queryParams + apiKey;
  console.log(endpoint);
  try {
    const response = await fetch(endpoint);
    if(response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.main.temp);
    } else {
      throw new Error('Request denied!');
    }
  } catch(error) {
    console.log(error.message);
  }
}

// Display the results to webpage
const displayTemp = (event) => {
  event.preventDefault();
  getTemp();
}

submit.addEventListener('click', displayTemp); 