const axios = require('axios');

const baseURL = 'http://api.openweathermap.org/data/2.5/';
const APIKEY = '527d6e62e78089c3c2e22b3dd2c7f4ba';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepURL (type, queryStringData) {
  return baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: APIKEY
  }
}

function getCurrentWeather (city) {
  let queryStringData = getQueryStringData (city);
  let url = prepURL('weather', queryStringData)

  return axios.get(url)
    .then(function(currentWeatherData) {
      return(currentWeatherData.data);
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather
};


