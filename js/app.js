// Empty object to store current data
const data = {};

// Selecting page elements
const inputField = document.getElementById('zip');
const submit = document.getElementById('generate');
const tempHolder = document.getElementById('temp');
const feelingsHolder = document.getElementById('feelings');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');


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

const getData = async (url = '/') => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    // body: JSON.stringify(data),
  });
  try {
    if (response.ok) {
      const newData = await response.json();
      console.log(newData);
    }
    // throw new Error('Bad request!');
  } catch(error) {
    console.log("error", 'Bad request!');
  }
}
