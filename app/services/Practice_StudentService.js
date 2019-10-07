const PracticeStudentService = module.exports;
const PracticeStudentRepository = require('../repositories/Practice_StudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PracticeStudentService.create = async (practiceStudent) => {
  console.log('creating practice_student');

  const practiceStudentToValidate = await PracticeStudentRepository.find(practiceStudent.id);
  console.log(practiceStudentToValidate);
  // eslint-disable-next-line max-len
  if (practiceStudentToValidate) { throw ErrorHandler.BaseError('Student has already been assigned to this practice', 409); }

  return PracticeStudentRepository.create(practiceStudent);
};

PracticeStudentService.find = (estudianteId) => {
  console.log('find person');

  return PracticeStudentRepository.findByStudent(estudianteId);
};
