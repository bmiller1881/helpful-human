import { RequestHandler } from 'express';
type ColorController = {
    getData: RequestHandler;
    postData: RequestHandler;
};
declare const colorController: ColorController;
export default colorController;
