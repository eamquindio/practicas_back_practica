const PracticeStudentService = module.exports;
const PracticeStudentRepository = require('../repositories/Practice_StudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PracticeStudentService.create = async (practiceStudent) => {
  console.log('creating practice_student');

  const practiceStudentToValidate = await PracticeStudentRepository.find(practiceStudent.id);
  console.log(practiceStudentToValidate);
  if (practiceStudentToValidate) throw ErrorHandler.BaseError('Student has already been assigned to this practice', 409);

  return PracticeStudentRepository.create(practiceStudent);
};
