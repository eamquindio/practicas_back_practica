const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const TipoPracticaRepository = require('../../app/repositories/TipoPracticaRepository');
const Helper = require('../Helper');

const API = '/api/practicas-ms/tipo_practica';
chai.use(chaiHttp);

describe('type practice CRUD flows', () => {
  before(() => Helper.migrate());
  
  beforeEach(async () => {
    await Helper.clear();
  });

  it('find tipo_practica test', async () => {
    await TipoPracticaRepository.create({ id: 1, descripcion: '240 hrs' });

    return chai
      .request(app)
      .get(`${API}/1`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body, { id: 1, descripcion: '240 hrs' });
      });
  });
});
