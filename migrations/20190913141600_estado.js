exports.up = knex =>
    knex.schema.createTable('estado', (table) => {
        table.increments('id').primary();
        table.date('fecha').notNull();
        table.string('estado').notNull();
    });

exports.down = knex => knex.schema.dropTable('estado');