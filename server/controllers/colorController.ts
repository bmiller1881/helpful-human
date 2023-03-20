import Colors from '../models/dataModel';
import { RequestHandler } from 'express';
import getColorData from '../models/util/createColors';

type ColorController = {
  getData: RequestHandler;
  postData: RequestHandler;
};

const colorController: ColorController = {
  getData: async (req, res, next) => {
    try {
      const data = await Colors.aggregate([
        { $sample: { size: Number(req.params.count) } },
      ]);
      res.locals.data = data;
      return next();
    } catch (error) {
      return next({
        log: 'colorController.getData: ERROR: ' + error,
        message: 'colorController.getData: ERROR: Could not find data',
      });
    }
  },

  postData: async (req, res, next) => {
    const colorData = getColorData(
      Number(req.params.total),
      Number(req.params.shadetotal),
      Number(req.params.tinttotal),
      Number(req.params.increment)
    );
    try {
      const data = await Colors.deleteMany({});
    } catch (error) {
      return next({
        log: 'colorController.postData: ERROR: ' + error,
        message: 'colorController.postData: ERROR: Could not create new data',
      });
    }
    try {
      const data = await Colors.insertMany(colorData);
      res.locals.data = data;
      return next();
    } catch (error) {
      return next({
        log: 'colorController.postData: ERROR: ' + error,
        message: 'colorController.postData: ERROR: Could not create new data',
      });
    }
  },
};

export default colorController;
