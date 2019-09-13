exports.up = knex =>
  knex.schema.createTable('evaluacion', (table) => {
    table.increments('codigo').primary();
    table.date('fechaRealizacion').notNull();
    table.string('vinculacionLaboral').notNull();
    table.string('nombreEvaluador').notNull();
    table.string('comentarioEmpresa').notNull();
    table.string('aspectoDesempenio_codigo').notNull();
    table.integer('practica_estudiante_id').notNull();
  });
exports.down = knex => knex.schema.dropTable('evaluacion');
