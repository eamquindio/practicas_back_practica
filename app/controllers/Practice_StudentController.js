const PracticeStudentController = module.exports;
const PracticeStudentService = require('../services/Practice_StudentService');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

PracticeStudentController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await PracticeStudentService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

PracticeStudentController.findByStudent = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const student = await PracticeStudentService.find(id);

    if (!student) return next(new ErrorHandler.BaseError('student not exists', 404));

    return res.send(student);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

PracticeStudentController.getAll = async (req, res, next) => {
  try {
    const practices = await PracticeStudentService.getAll();

    if (!student) return res.status(204).send();

    return res.send(practices);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
