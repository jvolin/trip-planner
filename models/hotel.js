const Sequelize = require('sequelize');
const db = require('./index.js')
const Place = require('./place.js')


var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 1, max: 5
  }
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Hotel.belongsTo(Place);

module.exports = Hotel
