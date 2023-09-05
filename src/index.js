/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
import './style.css';

const loc = document.querySelector('.loc');
const locTime = document.querySelector('.locTime');
const temp = document.querySelector('.temp');
const locCondition = document.querySelector('.locCondition');
const locDay = document.querySelector('.locDay');
const humidity = document.querySelector('.humidity');
const search = document.querySelector('#search');
const form = document.querySelector('#form-city');
const tempText = document.querySelector('.temp-text');
const corf = document.querySelector('.celorfar');

fetch(
  `http://api.weatherapi.com/v1/forecast.json?key=346db19fc2d3410b90233359231708&q=New York&days=3&aqi=no&alerts=no`,
  {
    mode: 'cors',
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    loc.textContent = `「 ${data.location.name} 」`;
    if (data.current.is_day === 1) locDay.textContent = `Day time`;
    else locDay.textContent = `Night time`;
    locTime.textContent = `${locTime}`;
    temp.textContent = Math.round(`${data.current.temp_f}`);
    corf.textContent = '°F';
    locCondition.textContent = `${data.current.condition.text} skies`;
    humidity.textContent = `Humidity ${data.current.humidity}%`;
  })
  .catch((error) => console.error('Error:', error));

function formSubmit(e) {
  e.preventDefault();
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=${search.value}&days=3&aqi=no&alerts=no`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loc.textContent = `「 ${data.location.name} 」`;
      if (data.current.is_day === 1) locDay.textContent = `Day time`;
      else locDay.textContent = `Night time`;
      temp.textContent = Math.round(`${data.current.temp_f}`);
      locCondition.textContent = `${data.current.condition.text} skies`;
      humidity.textContent = `Humidity ${data.current.humidity}%`;
      // button text and value reset
      tempText.textContent = '°C';
      tempText.value = '0';
      corf.textContent = '°F';
    })
    .catch((error) => console.error('Error:', error));
}

function convertCelsiusToFahrenheit(e) {
  e.preventDefault();
  if (tempText.value === '0') {
    tempText.value = '1';
    tempText.textContent = '°F';
    corf.textContent = '°C';
    const result = Math.round((5 / 9) * (temp.textContent - 32));
    temp.textContent = result;
  } else {
    tempText.value = '0';
    tempText.textContent = '°C';
    corf.textContent = '°F';
    const result = Math.round((9 / 5) * temp.textContent + 32);
    temp.textContent = result;
  }
}

function updateTime() {
  let currentTime = new Date();
  currentTime = currentTime.toLocaleTimeString();
  locTime.textContent = currentTime;
}

setInterval(updateTime, 1000);
updateTime();
form.addEventListener('submit', formSubmit);
tempText.addEventListener('click', convertCelsiusToFahrenheit);
