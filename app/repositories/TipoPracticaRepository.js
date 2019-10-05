const TipoPracticaRepository = module.exports;
const DB = require('../utils/DB');

TipoPracticaRepository.create = tipo_practica => DB('tipo_practica').insert(tipo_practica).returning('*');
TipoPracticaRepository.find = id => DB('tipo_practica').select('*').where({ id }).first();