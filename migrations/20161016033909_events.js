
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').primary();
      table.string('location', 150);
      table.decimal('lng');
      table.decimal('lat');
      table.string('sports', 30);
      table.integer('players');
      table.integer('userId');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
