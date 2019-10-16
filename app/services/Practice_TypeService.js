const PracticeTypeService = module.exports;
const PracticeTypeRepository = require('../repositories/Practice_TypeRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PracticeTypeService.create = async (practiceType) => {
  console.log('creating person');

  const practicetypeToValidate = await this.find(practiceType.id);
  console.log(practicetypeToValidate);
  if (practicetypeToValidate) throw ErrorHandler.BaseError('practica already exists', 409);

  return PracticeTypeRepository.create(practiceType);
};

PracticeTypeService.listAll = () => {
  console.log('find all practice_type');

  return PracticeTypeRepository.listAll();
  
};