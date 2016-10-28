exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('user_events', function(table) {
      table.integer('user_id').references('users.id');
      table.integer('event_id').references('events.id');
      table.integer('host_id').references('events.userId');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_events')
  ])
};
