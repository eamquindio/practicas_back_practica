const TipoPracticaService = module.exports;
const TipoPracticaRepository = require('../repositories/TipoPracticaRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

TipoPracticaService.create = async (typePractice) => {
  console.log('creating type practice');

  const typePracticeToValidate = await this.find(typePractice.id);
  console.log(typePracticeToValidate);
  if (typePracticeToValidate) throw ErrorHandler.BaseError('type_practice already exists', 409);

  return TipoPracticaRepository.create(typePractice);
};

TipoPracticaService.find = (typePractice) => {
  console.log('find typePractice');

  return TipoPracticaRepository.find(typePractice);
};
