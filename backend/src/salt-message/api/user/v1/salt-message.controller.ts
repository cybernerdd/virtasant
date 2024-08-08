import { Request, Response, NextFunction } from 'express';
import { validator, response } from '../../../../common/helpers';
import { saveSaltMessageSchema } from '../../../schemas/salt-message.schema';
import * as SaltMessageService from '../../../services/salt-message.service';

const { successResponse } = response;
const { validateSchema } = validator;

export const getSecret = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.params;

    const data = await SaltMessageService.getSecret(token);

    successResponse(res, 'secretFetched', data);
  } catch (err) {
    next(err);
  }
};

export const saveSecret = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateSchema(saveSaltMessageSchema, req.body);

    const url = await SaltMessageService.saveSecret(req.body);

    successResponse(res, 'secretSaved', { url });
  } catch (err) {
    next(err);
  }
};
