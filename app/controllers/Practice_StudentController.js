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
