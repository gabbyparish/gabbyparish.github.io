/* Global Variables */
// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey= 'c637d494b250092c8f1a9aca92a9a5da';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const userInfo = document.getElementById('entryHolder');

// Event listener to add function to existing HTML DOM element
const generateButton = document.getElementById("generate");
generateButton.addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    e.preventDefault();
    // get user input values
    const newZip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
  
    getWeather(baseURL, newZip, apiKey)
      .then(function (userData) {
        // add data to POST request
        postData('/add', { date: newDate, temp: userData.main.temp, content })
      }).then(function (newData) {
        // call updateUI to update browser content
        updateUI()
      })
    // reset form
    form.reset();
  }

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL+zipCode+apiKey);
    try{
        const data = await res.json();
        return data;
    } catch(error){
        console.log('error', error);
    }
}

/* Function to POST data */
const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application.json',
        },
        body: JSON.stringify({
            temp: data.temp,
            date: data.date,
            content: data.content
        })
    });

    try {
        const newData = await req.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to GET Project Data */

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        if(allData.date !== undefined && allData.temp !== undefined && allData.content !== undefined) {
            document.getElementById('date').innerHTML = allData.date;
            document.getElementById('temp').innerHTML = allData.temp;
            document.getElementById('content').innerHTML = allData.content;
        }
    } catch (error) {
        console.log('error', error);
    }
};

function kelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (kelvin - 273.15).toFixed(2);
    }
}


