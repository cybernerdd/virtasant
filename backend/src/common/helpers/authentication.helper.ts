'use strict';

import jwt from 'jsonwebtoken';
import { LinkExpiredError } from '../constants/errors';

export const generateToken = (
  data: any,
  secret: string,
  expiryTime: string,
) => {
  return jwt.sign(data, secret, { expiresIn: expiryTime });
};

export const verifyToken = async (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new LinkExpiredError();
  }
};
