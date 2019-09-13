exports.up = knex =>
  knex.schema.createTable('practica_estudiante', (table) => {
    table.increments('id').primary();
    table.date('fecha_inicio').notNull();
    table.integer('practica_id').notNull();
    table.integer('estado_id').notNull();
    table.integer('estudiante_id').notNull();

    table.foreing('practica_id').references('id').inTable('practica');
    table.foreing('estado_id').references('id').inTable('estado');
    table.foreing('estudiante_id').references('id').inTable('estudiante');
  });

exports.down = knex => knex.schema.dropTable('practica_estudiante');
