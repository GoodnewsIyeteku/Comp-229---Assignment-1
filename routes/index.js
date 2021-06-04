var express = require('express');
const app = require('../app');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Express Portfolio! Thanks for taking the time to know me!',});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome to my Express Portfolio! Thanks for taking the time to know me!'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me...',
name:"Goodnews Iyeteku",
paragraph:"My name is Goodnews Iyeteku and I'm a student in the Software Engineering Technican program. I'm currently in my second year of studies. I am to be well verse software engineering after the completion of my program",
key:'Mission Statement',
resume:'Fell free to have a look at my Resume:'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
project1:'08/2015- 09/2016 -  Invested in a stock trading simulation and engaged in various trading strategies such as call options and put options',
project2:'01/2021- Present - I plan to develop a website for my church using basic html, css and javascript',
project3:'08/2012- 12/2012 - I plan to link sql to the website, so that users can store valid information about themselves'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* GET Contact Us page.*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
message:'Leave me a message' });
});

module.exports = router;
