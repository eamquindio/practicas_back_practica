const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const PracticeStudentRepository = require('../../app/repositories/Practice_StudentRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/practica_estudiante';
chai.use(chaiHttp);

describe('Practice_Student CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('create practice_student test', () => chai
    .request(app)
    .post(API)
    .send({
      id: 1,
      fecha_inicio: '2019-09-12',
      practica_id: 1,
      estado_id: 1,
      estudiante_id: 1094976580,
    })
    .then(async () => {
      const practiceStudentToAssert = await PracticeStudentRepository.find(1);
      assert.equal(practiceStudentToAssert.id, 1);
    }));

  it('create practice_Student already exists test', async () => {
    await PracticeStudentRepository.create({
      id: 1,
      fecha_inicio: '2019-09-12',
      practica_id: 1,
      estado_id: 1,
      estudiante_id: 1094976580,
    });

    return chai
      .request(app)
      .post(API)
      .send({
        id: 1,
        fecha_inicio: '2019-09-12',
        practica_id: 1,
        estado_id: 1,
        estudiante_id: 1094976580,
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });

  it('find student test', async () => {
    await PracticeStudentRepository.create({
      id: 1,
      fecha_inicio: '2019-09-12',
      practica_id: 1,
      estado_id: 1,
      estudiante_id: 1094976580,
    });

    return chai
      .request(app)
      .get(`${API}/student/1094976580`)
      .then(async (response) => {
        const { body } = response;
        assert.Equal(body.estudiante_id,1094976580);
      });
  });

  it('find student not found test', async () => chai
    .request(app)
    .get(`${API}/student/1`)
    .catch((error) => {
      assert.equal(error.status, 404);
    }));
});
