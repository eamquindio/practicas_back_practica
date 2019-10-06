const PracticeTypeRepository = module.exports;
const DB = require('../utils/DB');

PracticeTypeRepository.create = practiceType => DB('tipo_practica').insert(practiceType).returning('*');
PracticeTypeRepository.listAll = () => DB('tipo_practica').select('*');