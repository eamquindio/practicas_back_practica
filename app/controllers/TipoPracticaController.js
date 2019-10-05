const TipoPracticaController = module.exports;
const TipoPracticaService = require('../services/TipoPracticaService');


TipoPracticaController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await TipoPracticaService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

TipoPracticaController.find = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const typePractice = await TipoPracticaService.find(id);

    if (!typePractice) return next(new ErrorHandler.BaseError('typePractice not exists', 404));

    return res.send(typePractice);
    } catch (error) {
      console.log(error);

      return next(error);
    }
};