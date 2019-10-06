const Helpers = module.exports;
const db = require('../app/utils/DB');

Helpers.db = db;

Helpers.migrate = () => db.migrate.latest();

Helpers.clear = async () => {
  await db('persons').del();
  await db('practica_estudiante').del();
  await db('tipo_practica').del();

};
