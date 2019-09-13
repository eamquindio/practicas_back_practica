exports.up = knex =>
  knex.schema.createTable('practica', (table) => {
    table.increments('id').primary();
    table.string('encargado').notNull();
    table.string('descripcion').notNull();
    table.date('fecha_inicio').notNull();
    table.integer('tipo_practica_id').notNull();
    table.integer('empresa_NIT').notNull();
    table.integer('coordinador_practica_cedula').notNull();


  });

exports.down = knex => knex.schema.dropTable('practica');
