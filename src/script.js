// Note: Weather icons, celsius and fahrenheit buttons and future weather conditions not working for week 5 homework
// Show dates for today and next 5 days

let now = new Date();
let day1 = new Date();
day1.setDate(new Date().getDate() + 1);
let day2 = new Date();
day2.setDate(new Date().getDate() + 2);
let day3 = new Date();
day3.setDate(new Date().getDate() + 3);
let day4 = new Date();
day4.setDate(new Date().getDate() + 4);
let day5 = new Date();
day5.setDate(new Date().getDate() + 5);

let date = now.getDate();
let day1Date = day1.getDate();
let day2Date = day2.getDate();
let day3Date = day3.getDate();
let day4Date = day4.getDate();
let day5Date = day5.getDate();

let year = now.getFullYear();
let day1Year = day1.getFullYear();
let day2Year = day2.getFullYear();
let day3Year = day3.getFullYear();
let day4Year = day4.getFullYear();
let day5Year = day5.getFullYear();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let day1Month = months[day1.getMonth()];
let day2Month = months[day2.getMonth()];
let day3Month = months[day3.getMonth()];
let day4Month = months[day4.getMonth()];
let day5Month = months[day5.getMonth()];

let h5 = document.querySelector("h5");
h5.innerHTML = `${date} ${month} ${year}`;

let day1DateText = document.querySelector("#day1-date");
day1DateText.innerHTML = `${day1Date} ${day1Month} ${day1Year}`;

let day2DateText = document.querySelector("#day2-date");
day2DateText.innerHTML = `${day2Date} ${day2Month} ${day2Year}`;

let day3DateText = document.querySelector("#day3-date");
day3DateText.innerHTML = `${day3Date} ${day3Month} ${day3Year}`;

let day4DateText = document.querySelector("#day4-date");
day4DateText.innerHTML = `${day4Date} ${day4Month} ${day4Year}`;

let day5DateText = document.querySelector("#day5-date");
day5DateText.innerHTML = `${day5Date} ${day5Month} ${day5Year}`;

// Pull forecast data
// Note - need to work on this section then remove console log
// Note - current = now, daily[0] = today, daily [1] = tomorrow etc.

function showForecast(response) {
  let maxtemp1 = (response.data.daily[1].temp.max);
  let maxtemp2 = (response.data.daily[2].temp.max);
  let maxtemp3 = (response.data.daily[3].temp.max);
  let maxtemp4 = (response.data.daily[4].temp.max);
  let maxtemp5 = (response.data.daily[5].temp.max);

  let mintemp1 = (response.data.daily[1].temp.min);
  let mintemp2 = (response.data.daily[2].temp.min);
  let mintemp3 = (response.data.daily[3].temp.min);
  let mintemp4 = (response.data.daily[4].temp.min);
  let mintemp5 = (response.data.daily[5].temp.min);

  let humidity1 = (response.data.daily[1].humidity);
  let humidity2 = (response.data.daily[2].humidity);
  let humidity3 = (response.data.daily[3].humidity);
  let humidity4 = (response.data.daily[4].humidity);
  let humidity5 = (response.data.daily[5].humidity);

  let windspeed1 = (response.data.daily[1].wind_speed);
  let windspeed2 = (response.data.daily[2].wind_speed);
  let windspeed3 = (response.data.daily[3].wind_speed);
  let windspeed4 = (response.data.daily[4].wind_speed);
  let windspeed5 = (response.data.daily[5].wind_speed);

  let day1conditions = (`Highs of ${maxtemp1} and lows of ${mintemp1}, humidity: ${humidity1}%, wind speed: ${windspeed1} Km/h`);
  let day1data = document.querySelector("#day1");
  day1data.innerHTML = `${day1conditions}`;

  let day2conditions = (`Highs of ${maxtemp2} and lows of ${mintemp2}, humidity: ${humidity2}%, wind speed: ${windspeed2} Km/h`);
  let day2data = document.querySelector("#day2");
  day2data.innerHTML = `${day2conditions}`;

  let day3conditions = (`Highs of ${maxtemp3} and lows of ${mintemp3}, humidity: ${humidity3}%, wind speed: ${windspeed3} Km/h`);
  let day3data = document.querySelector("#day3");
  day3data.innerHTML = `${day3conditions}`;

  let day4conditions = (`Highs of ${maxtemp4} and lows of ${mintemp4}, humidity: ${humidity4}%, wind speed: ${windspeed4} Km/h`);
  let day4data = document.querySelector("#day4");
  day4data.innerHTML = `${day4conditions}`;

  let day5conditions = (`Highs of ${maxtemp5} and lows of ${mintemp5}, humidity: ${humidity5}%, wind speed: ${windspeed5} Km/h`);
  let day5data = document.querySelector("#day5");
  day5data.innerHTML = `${day5conditions}`;
  
  console.log(response.data.daily[1].temp.min);
  console.log(response.data.daily[1].humidity);
  console.log(response.data.daily[1].weather[0].description);
  console.log(response.data.daily[1].weather[0].icon);
  console.log(response.data.daily[1].wind_speed);
  console.log(response.data.daily[1].sunrise);
  console.log(response.data.daily[1].sunset);
  console.log(response);
}

// City search field

function getLonLat(response) {
  let lon1 = (response.data.results[0].geometry.lng);
  let lat1 = (response.data.results[0].geometry.lat);
  let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
  let unit = "metric";
  let exclude = "minutely,hourly,alerts";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=${exclude}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl2).then(showForecast);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = cityInput.value;
  let city = cityInput.value;
  let unit = "metric";
  let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  let apiUrl1 = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=5205482e13d2458ba5738f8a2745c51d`;
  axios.get(apiUrl1).then(getLonLat);
}

let refreshButton = document.querySelector("#refresh-button");
refreshButton.addEventListener("click", search);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// My location button

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
  }
function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

    // Note: need to fix this so that it shows a location rather than 'Your current location' as this will prevent the forecast script from running. Can now use the location API to correct this.
function myLocationButton() {
  let placeMain = document.querySelector("h1");
  placeMain.innerHTML = "Your current location";
  let cityInput = document.querySelector("#city-input");
  cityInput.value = placeMain.innerHTML;
  navigator.geolocation.getCurrentPosition(myPosition);
}

let myCity = document.querySelector("#my-location-button");
myCity.addEventListener("click", myLocationButton);

// Default weather info for London
// Note - need to add default forecast data for London

function showDefaultWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
}

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=20b8554eeba454a5c2dc8a5569e82273`;
axios.get(apiUrl).then(showDefaultWeather);

// Celsius and fahrenheit buttons
// Note - need to replace this with a calculation rather than fixed values.

function replaceWithF(event) {
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = "63°F";
}
let fbutton = document.querySelector("#fbutton");
fbutton.addEventListener("click", replaceWithF);

function replaceWithC(event) {
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = "17°C";
}
let cbutton = document.querySelector("#cbutton");
cbutton.addEventListener("click", replaceWithC);
