const Sequelize = require('sequelize');
const db = require('../../config/database');


function randomId(){

  return 100000 + Math.floor(Math.random() * 99900000);
}

const tableName = 'ocurrence';

const Occurence = db.define('Occurrence', {
    pjo_bloco:  {
        type: Sequelize.INTEGER,
        defaultValue: function() {
          return randomId()
        },
      },
      pjo_unidade:  {
        type: Sequelize.STRING,
      },
  description: {
    type: Sequelize.STRING,
  },
  pjo_bandeira: {
    type: Sequelize.STRING,
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  ticketnumber:  {
    type: Sequelize.INTEGER,
    unique: true,
    defaultValue: function() {
      return randomId()
    },
  },
  pjo_empreendimentoid:  {
    type: Sequelize.INTEGER,
  },
  pjo_clientedaunidade:  {
    type: Sequelize.STRING,
  },

}, { tableName });
Occurence.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Occurence;
