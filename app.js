const express = require('express');
const app = express();
const db = require('./models');
const Place = require('./models/place.js')
const Hotel = require('./models/hotel.js')
const Activity = require('./models/activity.js')
const Restaurant = require('./models/restaurant.js')
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.use(function (err, req, res, next) {
  res.render('error');
});

app.get('/', function(req, res, next) {
  Promise.all([Hotel.findAll(),Restaurant.findAll(), Activity.findAll()])
  .then(function (results) {
    res.render('home', {
      templateHotels: results[0],
      templateRestaurants: results[1],
      templateActivities: results[2]
    });
  })
  .catch(next);
})


// replaced this version with the above!!!

// app.get('/', function(req, res, next) {
//   var outerScopeContainer = {};
//   Hotel.findAll()
//   .then(function (dbHotels) {
//     outerScopeContainer.dbHotels = dbHotels;
//     return Restaurant.findAll();
//   })
//   .then(function (dbRestaurants) {
//     outerScopeContainer.dbRestaurants = dbRestaurants;
//     return Activity.findAll();
//   })
//   .then(function (dbActivities) {
//     res.render('home', {
//       templateHotels: outerScopeContainer.dbHotels,
//       templateRestaurants: outerScopeContainer.dbRestaurants,
//       templateActivities: dbActivities
//     });
//   })
//   .catch(next);
// })


const PORT = 3000;

db.sync()
.then(() => {
  console.log('db synced!');
  app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
  });
});
