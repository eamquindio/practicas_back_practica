const PracticeTypeController = module.exports;
const PracticeTypeService = require('../services/Practice_TypeService');

PracticeTypeController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await PracticeTypeService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

PracticeTypeController.listAll = async (req, res, next) => {
  try {
    const practiceType = await PracticeTypeService.listAll();
    if (practiceType.length === 0) return res.status(204).send(practiceType);

    return res.send(practiceType);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
