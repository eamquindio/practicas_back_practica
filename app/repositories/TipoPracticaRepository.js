const TipoPracticaRepository = module.exports;
const DB = require('../utils/DB');

TipoPracticaRepository.create = tipoPractica => DB('tipo_practica').insert(tipoPractica).returning('*');

TipoPracticaRepository.find = id => DB('tipo_practica').select('*').where({ id }).first();