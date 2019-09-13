exports.up = knex =>
    knex.schema.createTable('evaluacion', (table) => {
        table.increments('codigo').primary();
        table.date('fechaRealizacion').notNull();
        table.string('vinculacionLaboral').notNull();
        table.string('nombreEvaluador').notNull();
        table.string('comentarioEmpresa').notNull();
        table.string('aspectoDesempenio_codigo').notNull();
        table.integer('practica_estudiante_id').notNull();

        table.foreing('aspectoDesempenio_codigo').references('codigo').inTable('aspectosDesempenio');
        table.foreing('practica_estudiante_id').references('id').inTable('practica_estudiante');
    });

exports.down = knex => knex.schema.dropTable('evaluacion');
