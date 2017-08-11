const Sequelize = require('sequelize');
const db = require('./index.js')
const Place = require('./place.js')

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Restaurant.belongsTo(Place);


module.exports = Restaurant
