const Knex = require('knex');
const connection = require('../knexfile');
const { Model } = require('objection');

const knexConnection = Knex(connection.development);

Model.knex(knexConnection);

class Machine extends Model {
  static get tableName () {
    return 'machines'
  }
}

class Pod extends Model {
  static get tableName () {
    return 'pods'
  }
}

module.exports = { Machine, Pod }
