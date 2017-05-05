var express = require('express');
var router = express.Router();
var request = require('request');
var helper = require('../helper/helper.js');
var config = require('../config/config.js');
var weather = {};

var configData = config.getConfig();
var base_url = helper.findKeyValue(configData,'baseurl');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('test ok', {});
});

router.get('/weather', function (req, res, next) {
  // request.get(base_url+'/weatherForecast', function (err, response, body) {
  //   weather = body;
  //   weather =JSON.parse(body);

  //   //**Uncomment below line with actual */
  //  // weather=JSON.parse(weather);

  //   let output = helper.getDates(weather);
  //   let result = {plotdata: output, title: weather.city.name, datetime: new Date(), unit: "Celsius"};
  //   res.render('index', result);
  // })
  
  res.render('test', {});
});
router.get('/weatherForecast', function (req, res, next) {
  //weatherObj = () => {
  //TODO: replace URL
  //let jsonContent = C.getFileDetails('./config/config.json');
  //let url = jsonContent.weatherApi + jsonContent.city + '&appid=' + jsonContent.appid + '&units=' + jsonContent.unit;
  // console.log(url);
  // request.get(url, function (error, response, body) {
  //   res.json(body);
  // });

  let data = helper.getFileDetails('./json/forecast.json');
  //console.log(data);

  res.json(data);
});
module.exports = router;
