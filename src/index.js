/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const loc = document.querySelector('.loc');
const locTime = document.querySelector('.locTime');
const tempC = document.querySelector('.tempC');
const tempF = document.querySelector('.tempF');
const locCondition = document.querySelector('.locCondition');

fetch(
  'https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=new york&aqi=no',
  {
    mode: 'cors',
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    loc.textContent = data.location.name;
    locTime.textContent = data.location.localtime;
    tempC.textContent = data.current.temp_c;
    tempF.textContent = data.current.temp_f;
    locCondition.textContent = data.current.condition.text;
  })
  .catch((error) => console.error('Error:', error));
