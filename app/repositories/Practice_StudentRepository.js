const PracticeStudentRepository = module.exports;
const DB = require('../utils/DB');

PracticeStudentRepository.create = practiceStudent => DB('practica_estudiante').insert(practiceStudent).returning('*');
PracticeStudentRepository.find = id => DB('practica_estudiante').select('*').where({ id }).first();
PracticeStudentRepository.findByStudent = estudiante_id => DB('practica_estudiante').select('*').where({ estudiante_id });
