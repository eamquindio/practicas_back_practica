const Practice_StudentController = module.exports;
const Practice_StudentService = require('../services/Practice_StudentService');

Practice_StudentController.save = async (req, res, next) => {
    const {
        body
    } = req;
    try {
        await Practice_StudentService.create(body);

        return res.send();
    } catch (error) {
        console.log({
            error
        });

        return next(error);
    }
};