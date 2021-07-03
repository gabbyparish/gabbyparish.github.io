/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'c637d494b250092c8f1a9aca92a9a5da&units=metric'

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let newDate = () => {
    let d = new Date();
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let day = days[d.getDay()]
    var year = d.getFullYear();
    let month = months[d.getMonth()];
    let date = d.getDate();
    return `${day}, ${month} ${date}, ${year}`;
  }

//   Creating an Event Listener for the element with 'generate' id
document.getElementById('generate').addEventListener('click', (evt) => {
    let zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;

    getWeather(baseURL, zip, apiKey )
    .then(function(data) {
        console.log(data)
        postData('/add', {
            date: newDate(),
            temp: data.main.temp,
            feelings: feelings
        })
        updateUI();
    })
});

// GET Request to OpenWeatherMap API
const getWeather = async (baseURL, zip, apiKey) => {
    const req = await fetch(`${baseURL}zip=${zip}&appid=${apiKey}`)
    try {
        const data = await req.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

// POST Request promise
const postData = async (url= '', data={}) => {
    console.log(data)
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  
    })
    try {
        const newData = await res.json()
        console.log(newData)
        return newData
    }catch(error) {
        console.log("error", error)
    }
}

// UpdateUI definition 
const updateUI = async (url= '') => {
    const req = await fetch('/all');
    try {
        const allData = await req.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('content').innerHTML = `How you're feeling: ${allData.feelings}`;
        document.getElementById('temp').innerHTML = `Weather: ${allData.temp}°C`;
        console.log(allData)
    } catch(error) {
        console.log("error", error);
    }
}

/** Add an event listener to a reset button
 * Reference: https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click */

function resetInput() {
    window.location.reload();
}