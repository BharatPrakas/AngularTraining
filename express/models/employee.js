'use strict';

const role = require("./role");

// Define a model for role table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alternateEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false

    },
    dateOfJoin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'employee'
  });
  // Adding a class level method.
  Model.associate = function (models) {
  };
  return Model;
};