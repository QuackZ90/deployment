var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  params: {namePrefix: 'a'},
  headers: {
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    'x-rapidapi-key': '5b5da16cc8msha8a4e6d0f246d91p1f8030jsnd1513bc79539'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});