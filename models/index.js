const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432');

module.exports = db;

var Place = db.define('place', {
  address: {
    type: Sequelize.string,
    allowNull: false
  },
  city: {
    type: Sequelize.string,
    allowNull: false
  },
  state: {
    type: Sequelize.string,
    allowNull: false
  },
  phone: {
    type: Sequelize.string,
    allowNull: false
  },
  location: { //(lat, lon float array)
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  }
});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.string,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.string, //(float from 1-5)
    allowNull: false
  },
  amenities: {
    type: Sequelize.string, //(string of comma delimited items)
    allowNull: false
  }
});

var Activity = db.define('activity', {
  name: {
    type: Sequelize.string,
    allowNull: false
  },
  age_range: {
    type: Sequelize.string,
    allowNull: false
  }
});

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.string,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.string,  // (comma delimited string list)
    allowNull: false
  },
  price: {
    type: Sequelize.string, //(integer from 1-5 for how many dollar signs)
    allowNull: false
  }
});


var Associations = db.define('associations', {

});
