const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'Hackathon_db',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  });
}

class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  Longitude: Sequelize.INTEGER,
  Latitude:Sequelize.INTEGER
}, {
  sequelize,
  modelName: 'user'
})


module.exports = {
  User
}