/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const loc = document.querySelector('.loc');
const locTime = document.querySelector('.locTime');
const tempC = document.querySelector('.tempC');
const tempF = document.querySelector('.tempF');
const locCondition = document.querySelector('.locCondition');
const locDay = document.querySelector('.locDay');
const humidity = document.querySelector('.humidity');
const search = document.querySelector('#search');
const form = document.querySelector('#form-city');

fetch(
  `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=$new york&aqi=no`,
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
    locTime.textContent = `${data.location.localtime}`;
    tempC.textContent = `${data.current.temp_c} °C`;
    tempF.textContent = `${data.current.temp_f} °F`;
    locCondition.textContent = `${data.current.condition.text} skies`;
    humidity.textContent = `Humidity ${data.current.humidity}%`;
  })
  .catch((error) => console.error('Error:', error));

function formSubmit(e) {
  e.preventDefault();
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=346db19fc2d3410b90233359231708&q=${search.value}&aqi=no`,
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
      locTime.textContent = `${data.location.localtime}`;
      tempC.textContent = `${data.current.temp_c} °C`;
      tempF.textContent = `${data.current.temp_f} °F`;
      locCondition.textContent = `${data.current.condition.text} skies`;
      humidity.textContent = `Humidity ${data.current.humidity}%`;
    })
    .catch((error) => console.error('Error:', error));
}

form.addEventListener('submit', formSubmit);
