const express = require('express');
const PersonController = require('./controllers/PersonController');
const PracticeStudentController = require('./controllers/Practice_StudentController');
const PraticeTypeController = require('./controllers/PracticeTypeController');
const TipoPracticaController = require('./controllers/TipoPracticaController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);
router.post('/practica_estudiante', PracticeStudentController.save);
router.post('/practice', PraticeTypeController.save);
router.get('/practiceType/all', PraticeTypeController.listAll);
router.get('/tipo_practica/:id(\\d+)', TipoPracticaController.find);
router.post('/tipo_practica', TipoPracticaController.save);
router.get('/practica_estudiante/student/:id(\\d+)', PracticeStudentController.findByStudent);
router.get('/practica_estudiante', PracticeStudentController.getAll);


module.exports = router;
