
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').primary();
      table.string('location', 150);
      table.string('sports', 30);
      table.integer('players');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
