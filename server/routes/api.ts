import { Router } from 'express';
import colorController from '../controllers/colorController';

const apiRouter = Router();

apiRouter.get('/colors/amount/:count', colorController.getData, (req, res) => {
  res.status(200).json(res.locals);
});

// Route currently only used for populating the database
/*
apiRouter.post(
  '/colors/total/:total/shadetotal/:shadetotal/tinttotal/:tinttotal/increment/:increment',
  colorController.postData,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);
*/

export default apiRouter;
