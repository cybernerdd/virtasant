import { NextFunction, Request, Response } from 'express';

import successMessages from '../constants/success-messages';
import { CustomError } from '../constants/errors';

export const successResponse = (res: Response, message: string, data?: any) => {
  return res.status(200).json({
    status: true,
    message: successMessages[message] || message,
    data: data || null,
  });
};

export const errorResponse = (
  err: Error,
  res: Response,
  req: Request,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode || 400).json({
      status: false,
      message: err.message,
      data: err.data || null,
    });
  } else {
    return res.status(400).json({
      status: false,
      message: err.message,
      data: null,
    });
  }
};
