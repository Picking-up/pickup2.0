
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').primary();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
