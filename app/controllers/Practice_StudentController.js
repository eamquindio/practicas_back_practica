const PracticeStudentController = module.exports;
const PracticeStudentService = require('../services/Practice_StudentService');

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