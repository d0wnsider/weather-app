/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const loc = document.querySelector('.loc');
const img = document.querySelector('img');

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
    console.log(data);
    console.log(data.location.name);
    loc.textContent = data.location.name;
    console.log(data.location.localtime);
    console.log(data.current.temp_c);
    console.log(data.current.temp_f);
    console.log(data.current.condition.text);
    console.log(data.current.condition.icon);
    img.src = data.current.condition.icon;
    console.log(data.current.wind_mph);
    console.log(data.current.wind_dir);
    console.log(data.current.humidity);
    console.log(data.current.feelslike_c);
    console.log(data.current.feelslike_f);
  })
  .catch((error) => console.error('Error:', error));
