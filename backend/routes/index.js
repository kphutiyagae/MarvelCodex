var express = require('express');
var router = express.Router();

const ApiCall = require('../api/api_call.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "Message" : "Connection Successful",
    "Code" : "200"
  })

});

/* GET Character List. */
router.get('/characters', function(req, res) {

  var response;
    
  var url = "http://gateway.marvel.com/v1/public/characters?limit=100"

  ApiCall.apiCall(url, function(response){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    res.json(response);
    res.end();
  })

});

/* GET A Character's info. */
router.get('/characters/:id', function(req, res) {

  var response;

  var url = "http://gateway.marvel.com/v1/public/characters?"

  ApiCall.apiCall(url, function(response){
    res.json(response);
    res.end();
  })

});

/* GET Comics List. */
router.get('/comics', function(req, res) {


  var response;
    
  var url = "http://gateway.marvel.com/v1/public/comics?"

  ApiCall.apiCall(url, function(response){
    res.json(response);
    res.end();
  })

});

/* GET a particular Comic info. */
router.get('/comics/:id', function(req, res) {

  var response;
    
  var url = "http://gateway.marvel.com/v1/public/comics?"

  ApiCall.apiCall(url, function(response){
    res.json(response);
    res.end();
  })

});

/* GET Events List. */
router.get('/events', function(req, res) {

  var response;
    
  var url = "http://gateway.marvel.com/v1/public/events?"

  ApiCall.apiCall(url, function(response){
    res.json(response);
    res.end();
  })

});

/* GET Stories List. */
router.get('/stories', function(req, res) {

  var response;
    
  var url = "http://gateway.marvel.com/v1/public/stories?"

  ApiCall.apiCall(url, function(response){
    res.json(response);
    res.end();
  })

});

module.exports = router;
