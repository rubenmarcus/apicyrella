const Sequelize = require('sequelize');

const db = require('../../config/database');



const tableName = 'assistance';

const assistance = db.define('Assistance', {
  actualstart: {
    type: Sequelize.DATEONLY ,
  },
  actualend: {
    type: Sequelize.DATEONLY,
  },
  pjo_tipodeatividade: {
    type: Sequelize.STRING,
  },
  subject:{
    type: Sequelize.STRING,
  },
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  pjo_empreendimentoid:  {
    type: Sequelize.INTEGER,
    unique: true
  },
  pjo_blocoid:  {
    type: Sequelize.INTEGER,
    unique: true
  },
  pjo_unidadeid:  {
    type: Sequelize.INTEGER,
    unique: true
  },

}, { tableName });

// eslint-disable-next-line
assistance.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = assistance;