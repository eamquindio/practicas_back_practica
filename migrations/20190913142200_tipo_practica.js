exports.up = knex =>
    knex.schema.createTable('tipo_practica', (table) => {
        table.increments('id').primary();
        table.string('descripcion').notNull();
    });

exports.down = knex => knex.schema.dropTable('tipo_practica');
