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
// Note - current = now, daily[0] = today, daily [1] = tomorrow etc.

function showForecast(response) {
  let temp1max = Math.round(response.data.daily[1].temp.max);
  let temp2max = Math.round(response.data.daily[2].temp.max);
  let temp3max = Math.round(response.data.daily[3].temp.max);
  let temp4max = Math.round(response.data.daily[4].temp.max);
  let temp5max = Math.round(response.data.daily[5].temp.max);

  let temp1min = Math.round(response.data.daily[1].temp.min);
  let temp2min = Math.round(response.data.daily[2].temp.min);
  let temp3min = Math.round(response.data.daily[3].temp.min);
  let temp4min = Math.round(response.data.daily[4].temp.min);
  let temp5min = Math.round(response.data.daily[5].temp.min);

  let humidity1 = Math.round(response.data.daily[1].humidity);
  let humidity2 = Math.round(response.data.daily[2].humidity);
  let humidity3 = Math.round(response.data.daily[3].humidity);
  let humidity4 = Math.round(response.data.daily[4].humidity);
  let humidity5 = Math.round(response.data.daily[5].humidity);

  let windspeed1 = Math.round(response.data.daily[1].wind_speed);
  let windspeed2 = Math.round(response.data.daily[2].wind_speed);
  let windspeed3 = Math.round(response.data.daily[3].wind_speed);
  let windspeed4 = Math.round(response.data.daily[4].wind_speed);
  let windspeed5 = Math.round(response.data.daily[5].wind_speed);

  let description1 = (response.data.daily[1].weather[0].description);
  let description2 = (response.data.daily[2].weather[0].description);
  let description3 = (response.data.daily[3].weather[0].description);
  let description4 = (response.data.daily[4].weather[0].description);
  let description5 = (response.data.daily[5].weather[0].description);

  let day1conditions = (`Conditions: ${description1} - Highs of ${temp1max} and lows of ${temp1min} - Humidity: ${humidity1}% - Wind speed: ${windspeed1} Km/h`);
  let day1data = document.querySelector("#day1");
  day1data.innerHTML = `${day1conditions}`;

  let day2conditions = (`Conditions: ${description2} - Highs of ${temp2max} and lows of ${temp2min} - Humidity: ${humidity2}% - Wind speed: ${windspeed2} Km/h`);
  let day2data = document.querySelector("#day2");
  day2data.innerHTML = `${day2conditions}`;

  let day3conditions = (`Conditions: ${description3} - Highs of ${temp3max} and lows of ${temp3min} - Humidity: ${humidity3}% - Wind speed: ${windspeed3} Km/h`);
  let day3data = document.querySelector("#day3");
  day3data.innerHTML = `${day3conditions}`;

  let day4conditions = (`Conditions: ${description4} - Highs of ${temp4max} and lows of ${temp4min} - Humidity: ${humidity4}% - Wind speed: ${windspeed4} Km/h`);
  let day4data = document.querySelector("#day4");
  day4data.innerHTML = `${day4conditions}`;

  let day5conditions = (`Conditions: ${description5} - Highs of ${temp5max} and lows of ${temp5min} - Humidity: ${humidity5}% - Wind speed: ${windspeed5} Km/h`);
  let day5data = document.querySelector("#day5");
  day5data.innerHTML = `${day5conditions}`;
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

function getLondon(response) {
  //current weather icon for London
  let iconCode = (response.data.current.weather[0].icon);
  let icon = document.querySelector("#main-icon");
  icon.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode}@2x.png`);

  //forecast weather icons for London
  let iconCode1 = (response.data.daily[1].weather[0].icon);
  let icon1 = document.querySelector("#icon1");
  icon1.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode1}@2x.png`);

  let iconCode2 = (response.data.daily[2].weather[0].icon);
  let icon2 = document.querySelector("#icon2");
  icon2.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode2}@2x.png`);

  let iconCode3 = (response.data.daily[3].weather[0].icon);
  let icon3 = document.querySelector("#icon3");
  icon3.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode3}@2x.png`);

  let iconCode4 = (response.data.daily[4].weather[0].icon);
  let icon4 = document.querySelector("#icon4");
  icon4.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode4}@2x.png`);

  let iconCode5 = (response.data.daily[5].weather[0].icon);
  let icon5 = document.querySelector("#icon5");
  icon5.setAttribute("src",`http://openweathermap.org/img/wn/${iconCode5}@2x.png`);
  
  //current temperature for London
  let temp = Math.round(response.data.current.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temp}°C`;
  
  //forecast temperature for London
  let temp1max = Math.round(response.data.daily[1].temp.max);
  let temp2max = Math.round(response.data.daily[2].temp.max);
  let temp3max = Math.round(response.data.daily[3].temp.max);
  let temp4max = Math.round(response.data.daily[4].temp.max);
  let temp5max = Math.round(response.data.daily[5].temp.max);

  let temp1min = Math.round(response.data.daily[1].temp.min);  
  let temp2min = Math.round(response.data.daily[2].temp.min);
  let temp3min = Math.round(response.data.daily[3].temp.min);
  let temp4min = Math.round(response.data.daily[4].temp.min);
  let temp5min = Math.round(response.data.daily[5].temp.min);

  //current weather description for London
  let mainDescription = response.data.current.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
  
  //forecast weather description for London
  let description1 = response.data.daily[1].weather[0].description;
  let description2 = response.data.daily[2].weather[0].description;
  let description3 = response.data.daily[3].weather[0].description;
  let description4 = response.data.daily[4].weather[0].description;
  let description5 = response.data.daily[5].weather[0].description;

  //current humidity for London
  let humidity = Math.round(response.data.current.humidity);
  let humidityResult = document.querySelector("#main-humidity");
  humidityResult.innerHTML = `Humidity: ${humidity}%`;
  
  //forecast humidity for London
  let humidity1 = Math.round(response.data.daily[1].humidity);
  let humidity2 = Math.round(response.data.daily[2].humidity);
  let humidity3 = Math.round(response.data.daily[3].humidity);
  let humidity4 = Math.round(response.data.daily[4].humidity);
  let humidity5 = Math.round(response.data.daily[5].humidity);

  //current windspeed for London
  let windspeed = Math.round(response.data.current.wind_speed);
  let windspeedResult = document.querySelector("#main-windspeed");
  windspeedResult.innerHTML = `Wind Speed: ${windspeed} Km/h`;

  //forecast windspeed for London
  let windspeed1 = Math.round(response.data.daily[1].wind_speed);
  let windspeed2 = Math.round(response.data.daily[2].wind_speed);
  let windspeed3 = Math.round(response.data.daily[3].wind_speed);
  let windspeed4 = Math.round(response.data.daily[4].wind_speed);
  let windspeed5 = Math.round(response.data.daily[5].wind_speed);

  //forecast write up for London
  //need to add description
  let day1conditions = `Conditions: ${description1} - Highs of ${temp1max} and lows of ${temp1min} - Humidity: ${humidity1}% - Wind speed: ${windspeed1} Km/h`;
  let day1data = document.querySelector("#day1");
  day1data.innerHTML = `${day1conditions}`;

  let day2conditions = `Conditions: ${description2} - Highs of ${temp2max} and lows of ${temp2min} - Humidity: ${humidity2}% - Wind speed: ${windspeed2} Km/h`;
  let day2data = document.querySelector("#day2");
  day2data.innerHTML = `${day2conditions}`;

  let day3conditions = `Conditions: ${description3} - Highs of ${temp3max} and lows of ${temp3min} - Humidity: ${humidity3}% - Wind speed: ${windspeed3} Km/h`;
  let day3data = document.querySelector("#day3");
  day3data.innerHTML = `${day3conditions}`;

  let day4conditions = `Conditions: ${description4} - Highs of ${temp4max} and lows of ${temp4min} - Humidity: ${humidity4}% - Wind speed: ${windspeed4} Km/h`;
  let day4data = document.querySelector("#day4");
  day4data.innerHTML = `${day4conditions}`;

  let day5conditions = `Conditions: ${description5} - Highs of ${temp5max} and lows of ${temp5min} - Humidity: ${humidity5}% - Wind speed: ${windspeed5} Km/h`;
  let day5data = document.querySelector("#day5");
  day5data.innerHTML = `${day5conditions}`;
}
let lon = "-0.1276";
let lat = "51.5073";
let unit = "metric";
let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
axios.get(apiUrl).then(getLondon);

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
