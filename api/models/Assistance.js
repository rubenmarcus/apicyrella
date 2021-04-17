const Sequelize = require('sequelize');

const db = require('../../config/database');



const tableName = 'assistance';

const assistance = db.define('Assistance', {
  actualstart: {
    type: Sequelize.DATEONLY,
    required: true,
    allowNull: false,
    notEmpty: true
  },
  actualend: {
    type: Sequelize.DATEONLY,
    required: true,
    allowNull: false,
    notEmpty: true
  },
  pjo_tipodeatividade: {
    type: Sequelize.STRING,
    required: true,
    allowNull: false,
    notEmpty: true
  },
  subject:{
    type: Sequelize.STRING,
    required: true,
    allowNull: false,
    notEmpty: true
  },
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  pjo_empreendimentoid:  {
    type: Sequelize.INTEGER,
    required: true,
    allowNull: false,
    notEmpty: true
  },
  pjo_blocoid:  {
    type: Sequelize.INTEGER,
    required: true,
    allowNull: false,
    notEmpty: true

  },
  pjo_unidadeid:  {
    type: Sequelize.INTEGER,
    required: true,
    allowNull: false,
    notEmpty: true
  },

}, { tableName });

// eslint-disable-next-line
assistance.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = assistance;