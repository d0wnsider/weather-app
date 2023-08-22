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
  })
  .catch((error) => console.error('Error:', error));
