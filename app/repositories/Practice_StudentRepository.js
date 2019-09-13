const Practice_StudentRepository = module.exports;
const DB = require('../utils/DB');

Practice_StudentRepository.create = practice_student => DB('practica_estudiante').insert(practice_student).returning('*');