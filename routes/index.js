var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function (req, res, next) {
  let fs = require("fs");
  let filePath = './config/config.json';
  let contents = fs.readFileSync(filePath);
  let jsonContent = JSON.parse(contents);
  let url = jsonContent.weatherApi + jsonContent.city + '&appid=' + jsonContent.appid+'&units='+jsonContent.unit;
  request.get(url, function (error, response, body) {
    let temperature = JSON.parse( body );
    res.json(temperature.list);
  });

});
module.exports = router;
