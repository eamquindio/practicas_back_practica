const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const PracticeTypeRepository = require('../../app/repositories/Practice_TypeRepository');
const Helper = require('../Helper');


const API = '/api/practicas-ms/practiceType';
chai.use(chaiHttp);

describe('PracticeType CRUD flows', () => {
  before(() => Helper.migrate());
  beforeEach(async () => {
    await Helper.clear();
  });


  it('find all practiceType', async () => {
    await PracticeTypeRepository.create([{ id: 1, descripcion: '24 Horas' }, { id: 2, descripcion: 'Contrato' }]);

    return chai
      .request(app)
      .get(`${API}/all`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body.length, 2);
      });
  });

  it('find all practicetype empty test', async () => chai
    .request(app)
    .get(`${API}/all`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
