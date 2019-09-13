const Practice_StudentService = module.exports;
const Practice_StudentRepository = require('../repositories/Practice_StudentRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

Practice_StudentService.create = async (practice_student) => {
    console.log('creating practice_student');

    const practice_StudentToValidate = await this.find(practice_student.id);
    console.log(practice_StudentToValidate);
    if (practice_StudentToValidate) throw ErrorHandler.BaseError('Student has already been assigned to this practice', 409);

    return Practice_StudentRepository.create(practice_student);
};